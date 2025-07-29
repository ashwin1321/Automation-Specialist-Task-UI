import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authUtils/login.js';
import credentials from '../../utils/credentials.js';

test('Login existing user', async ({ page }) => {

  try {
    await page.goto('/');

    await userLogin(page, credentials.name, credentials.password);

    const loginSuccessMsg = page.locator('div.ant-message-custom-content.ant-message-success >> text=login success');
    await expect(loginSuccessMsg).toBeVisible({ timeout: 3000 });

  } catch (error) {
    console.error('something went wroing', error);
    throw error;
  }
});
