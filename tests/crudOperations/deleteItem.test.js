import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authenticateHelpers.js';
import credentials from '../../utils/credentials.js';
import { deleteItem } from '../../utils/allTransactionsHelper.js';
import { updatedItemData, newItemData } from '../../utils/data.js';

test('delete an item', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);
        
        await deleteItem(page, newItemData.description, updatedItemData.description);

        await expect(page.getByText(newItemData.description)).not.toBeVisible();
        await expect(page.getByText(newItemData.description)).not.toBeVisible();
    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
