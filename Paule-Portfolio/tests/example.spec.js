import { test, expect } from '@playwright/test';

test('My Portfolio Loads Successfully', async ({ page }) => {
  // 1. Go to your local Vite server (Change the port number if yours is different!)
  await page.goto('http://localhost:5173');

  // 2. Assert that your main heading or portfolio title is visible
  // Change "MYPORTFOLIO" to an actual text snippet visible on your homepage
  await expect(page.getByText('Paule-Portfolio')).toBeVisible();
});