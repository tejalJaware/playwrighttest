import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.demoblaze.com');
await page.getByRole('link', { name: 'Contact' }).click();
await page.getByText('Contact Email: Contact Name:').click();
await page.locator('#recipient-email').click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
await page.getByRole('link', { name: 'About us' }).click();
await page.locator('#videoModal').getByLabel('Close').click();
});