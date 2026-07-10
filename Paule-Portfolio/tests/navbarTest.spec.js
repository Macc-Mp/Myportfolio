import { test, expect } from '@playwright/test';

// 1. Added isMobile here so Playwright can detect the viewport size
test('User can navigate to the Projects section', async ({ page, isMobile }) => {
  // Go to your portfolio
  await page.goto('http://localhost:5173');

  // 2. Conditional block: If it's a mobile browser, open the hidden CSS checkbox menu first
  if (isMobile) {
    const menuButton = page.locator('.menu-button-container');
    await menuButton.click();
  }

  // 3. Find the Projects link and click it
  // Updated the name from /Projects/i to './Projects' to match your exact React text!
  const projectsBtn = page.getByRole('link', { name: './Projects' });
  await projectsBtn.click();

  // 4. Assert that your projects section heading appears on the screen
  await expect(page.getByRole('heading', { name: /Projects/i })).toBeVisible();
});