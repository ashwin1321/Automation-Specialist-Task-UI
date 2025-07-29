import { test, expect } from '@playwright/test';
import { userLogin } from '../../utils/authUtils/login.js';
import credentials from '../../utils/credentials/credentials.js';
import { createNewItem } from '../../utils/transactions/createItem.js';
import { newItemData } from '../../utils/data.js';

test('Add new item in the app', async ({ page }) => {

    try {
        await page.goto('/');

        await userLogin(page, credentials.name, credentials.password);

        await page.getByRole('button', { name: 'Add New' }).waitFor({ state: 'visible' });
        await page.getByRole('button', { name: 'Add New' }).click();

        const testDescription = `${newItemData.description}-${Math.floor(Math.random() * 10000)}`;

        await createNewItem(
            page,
            newItemData.amount,
            newItemData.type,
            newItemData.date,
            newItemData.category,
            newItemData.reference,
            testDescription
        );

        await expect(page.getByText(testDescription)).toBeVisible();

    } catch (error) {
        console.error('something went wroing', error);
        throw error;
    }
});
