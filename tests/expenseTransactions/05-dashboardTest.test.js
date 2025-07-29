import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authUtils/login.js';
import credentials from '../../utils/credentials.js';
import { filterItem } from '../../utils/transactions/filterItem.js';

test('Check if the item is present in dashboard or not -Get request validation', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);

        await filterItem(page)

        await expect(page.getByText("test data get request")).toBeVisible();


    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
