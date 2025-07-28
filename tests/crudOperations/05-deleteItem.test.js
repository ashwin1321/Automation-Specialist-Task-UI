import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authenticateHelpers.js';
import credentials from '../../utils/credentials.js';

test('delete an item', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);

        await page.locator('tbody .ant-table-row').first().locator('[role="img"][aria-label="delete"]').waitFor({ state: "visible" })

        const totalItem = await page.locator('tbody .ant-table-row').count();

        await page.locator('tbody .ant-table-row').first().locator('[role="img"][aria-label="delete"]').click()

        await page.waitForTimeout(2000);

        const totalnewItems = await page.locator('tbody .ant-table-row').count();
        expect(totalnewItems).toBeLessThan(totalItem);

    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
