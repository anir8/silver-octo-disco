 import { test, expect } from '@playwright/test';

test('load TTA practice landing', async ({ page }) => {
  await page.goto('/playwright/widgets/expect.html');
  await expect(page).toHaveTitle(/Assertions/);
});