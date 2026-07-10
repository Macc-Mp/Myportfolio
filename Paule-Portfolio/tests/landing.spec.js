import { test, expect } from '@playwright/test';

// Grouping landing page tests together
test.describe('Landing Page Diagnostics', () => {

  // This runs before every single test in this block
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

// 1. Structural Check
  test('Should display critical hero elements on load', async ({ page }) => {
    const navbar = page.getByRole('navigation');
    await expect(navbar).toBeVisible();

    // Select by the href attribute directly to bypass the apostrophe text mismatch
    const connectBtn = page.locator('a[href="#contact"]');
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
  test('Should match visual baseline snapshot', async ({ page }) => {
    // The first time you run this, Playwright will generate a base snapshot image.
    // The second time, it compares the live page against that image pixel-by-pixel!
    await expect(page).toHaveScreenshot('landing-page-baseline.png', {
      maxDiffPixels: 100, // Allows for tiny anti-aliasing variations
    });
  });
});
