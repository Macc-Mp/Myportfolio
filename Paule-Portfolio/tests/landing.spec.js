import { test, expect } from '@playwright/test';

// Grouping landing page tests together
test.describe('Landing Page Diagnostics', () => {

  // This runs before every single test in this block
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  // 1. Structural Check: Verify hero elements are visible
  test('Should display critical hero elements on load', async ({ page }) => {
    // Check that the main navigation bar exists
    const navbar = page.getByRole('navigation');
    await expect(navbar).toBeVisible();

    // Check that your main call-to-action (CTA) button exists
    const connectBtn = page.getByRole('link', { name: /let's connect/i });
    await expect(connectBtn).toBeVisible();
  });

  // 2. Interaction Check: Test the primary "Scroll to Content" or Navigation
  test('Should navigate properly when clicking Resume CTA', async ({ page }) => {
    const resumeBtn = page.getByRole('link', { name: /download resume/i });
    
    // Assert the button has the correct download attribute or link destination
    await expect(resumeBtn).toHaveAttribute('href', /.*\.pdf/); 
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