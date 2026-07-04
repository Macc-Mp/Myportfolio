import { test, expect } from '@playwright/test';

test('User can navigate to the Projects section', async ({ page }) => {
  // 1. Go to your portfolio
  await page.goto('http://localhost:5173');

  // 2. Find the Projects button/link and click it
  // We use a regular expression to match the text roughly
 // This tells Playwright to specifically click the LINK that says Projects
const projectsBtn = page.getByRole('link', { name: /Projects/i });
await projectsBtn.click();

  // 3. Assert that something inside your projects section appears!
  // Replace 'PROJECTS' with a title or text that shows up *after* you click that tab
  await expect(page.getByText('./Projects')).toBeVisible();
});