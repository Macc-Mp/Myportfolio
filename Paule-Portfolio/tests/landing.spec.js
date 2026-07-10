import { test, expect } from '@playwright/test';

// Grouping landing page tests together
test.describe('Landing Page Diagnostics', () => {

  // This runs before every single test in this block
  // This runs before every single test in this block
  test.beforeEach(async ({ page }) => {
    try {
      await page.goto('http://localhost:5173');
    } catch (error) {
      // 💡 Best Practice: Intercept environment network flakes and trigger a single automated retry
      if (error.message.includes('ERR_NETWORK_CHANGED')) {
        await page.waitForTimeout(500); // Give the local network stack half a second to settle
        await page.goto('http://localhost:5173');
      } else {
        throw error;
      }
    }
  });

// 1. Structural Check
  test('Should display critical hero elements on load', async ({ page }) => {
    const navbar = page.getByRole('navigation');
    await expect(navbar).toBeVisible();

    // 💡 Best Practice: Match the absolute underlying link node property 
    // and wait for it to fully attach to the layout tree.
    const connectBtn = page.locator('a[href="#contact"]');
    
    // Explicitly give WebKit a moment to mount the element in the DOM tree
    await connectBtn.waitFor({ state: 'attached', timeout: 5000 });
    
    // Assert visual structural layout presence
    await expect(connectBtn).toBeVisible();
  });

  // 2. Interaction Check: Test the primary "Download Resume" link
  test('Should navigate properly when clicking Resume CTA', async ({ page }) => {
    // Look for any link that contains the word "resume" anywhere in its href attribute
    const resumeBtn = page.locator('a[href*="resume"]');
    await expect(resumeBtn).toBeVisible();
    
    // Check that it includes a download attribute (regardless of what filename it contains)
    await expect(resumeBtn).toHaveAttribute('download');
  });

  // 3. Visual Check: Ensure it looks exactly right (Visual Regression)
  // Update your visual check test in landing.spec.js to this:
test('Should match visual baseline snapshot', async ({ page }) => {
  // 1. Force the page to wait until the network is completely quiet before starting the capture
  await page.waitForLoadState('networkidle');

  // 2. Wrap the screenshot check with a dedicated, longer timeout (e.g., 15 seconds)
  await expect(page).toHaveScreenshot('landing-page-baseline.png', {
    timeout: 15000,           // 💡 Boost timeout to 15s so it doesn't snap-fail at 5s
    maxDiffPixels: 100,      
    maxDiffPixelRatio: 0.05, 
    animations: 'disabled',   // Explicitly freezes CSS/JS animations
  });
});

});
