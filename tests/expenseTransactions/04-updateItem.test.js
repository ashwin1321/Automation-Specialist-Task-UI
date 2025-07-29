import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authUtils/login.js';
import credentials from '../../utils/credentials/credentials.js';
import { updateItem } from '../../utils/transactions/updateItem.js';
import { updatedItemData } from '../../utils/data.js';

test('Update an item', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);
        
        await page.locator('tbody .ant-table-row').first().locator('[role="img"][aria-label="edit"]').waitFor({state: "visible"})
        await page.locator('tbody .ant-table-row').first().locator('[role="img"][aria-label="edit"]').click();

        await updateItem(
            page,
            updatedItemData.amount,
            updatedItemData.description
        );
        
        await expect(page.getByText(updatedItemData.description)).toBeVisible();

    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
