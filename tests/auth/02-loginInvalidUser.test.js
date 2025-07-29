import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authUtils/login.js';

test('Login invalid user', async ({ page }) => {

  try {
    await page.goto('/');

    await userLogin(page, "expensuserinvalid", "passw2gasd");

  const loginerrormsg = page.locator('div.ant-message-custom-content.ant-message-error');
  await expect(loginerrormsg).toBeVisible({ timeout: 3000 });
  } catch (error) {
    console.error('something went wroing', error);
    throw error;
  }
});
