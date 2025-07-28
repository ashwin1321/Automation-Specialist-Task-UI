import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { userLogin } from '../../utils/authenticateHelpers.js';

test('Login existing user', async ({ page }) => {

  try {
    const finelname = fileURLToPath(import.meta.url);
    const foldername = path.dirname(finelname);

    const filePath = path.resolve(foldername, '../../utils/userCredentials.json');
    const credentials = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    await page.goto('/');

    await userLogin(page, credentials.name, credentials.password);

    const loginSuccessMsg = page.locator('div.ant-message-custom-content.ant-message-success >> text=login success');
    await expect(loginSuccessMsg).toBeVisible({ timeout: 3000 });

    console.log("user logged in successfully");
  } catch (error) {
    console.error('something went wroing', error);
    throw error;
  }
});
