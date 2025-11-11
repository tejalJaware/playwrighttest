import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('tejal@gmail.com');
  await page.getByTestId('royal-email').press('Tab');
  await page.getByTestId('royal-pass').fill('Tejal@123');
  await page.getByTestId('royal-login-button').click();
});