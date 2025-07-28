import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authenticateHelpers.js';
import credentials from '../../utils/credentials.js';
import { createNewItem } from '../../utils/allTransactionsHelper.js';
import { newItemData } from '../../utils/data.js';

test('Add new item in the app', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);
        
        await page.getByRole('button', { name: 'Add New' }).waitFor({ state: 'visible' });
        await page.getByRole('button', { name: 'Add New' }).click();

        await createNewItem(
            page,
            newItemData.amount,
            newItemData.type,
            newItemData.category,
            newItemData.reference,
            newItemData.description
        );
        
        await expect(page.getByText(newItemData.description)).toBeVisible();

    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
