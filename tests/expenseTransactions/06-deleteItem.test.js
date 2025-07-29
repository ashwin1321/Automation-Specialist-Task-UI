import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authUtils/login.js';
import credentials from '../../utils/credentials.js';
import { deleteItenm } from '../../utils/transactions/deleteItem.js';

test('delete an item', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);

        await page.locator('tbody .ant-table-row').first().waitFor({ state: "visible" })
        const totalItem = await page.locator('tbody .ant-table-row').count();

        await deleteItenm(page)
        await page.waitForTimeout(2000);

        const totalnewItems = await page.locator('tbody .ant-table-row').count();
        expect(totalnewItems).toBeLessThan(totalItem);

    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
