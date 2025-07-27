import { test as setup } from '@playwright/test';
import fs from 'fs';
import { genRandomUser } from '../utils/credentials.js';
import { clickRegister, userRegistration, userLogin } from '../utils/authenticateHelpers.js';

setup('Register and Login new user', async ({ page }) => {
    try {
        const user = genRandomUser();

        await page.goto('/');

        await clickRegister(page);

        await userRegistration(page, user.name, user.email, user.password);

        await userLogin(page, user.email, user.password);

        await page.context().storageState({ path: 'userDetails.json' });

        fs.writeFileSync('utils/userCredentials.json', JSON.stringify(user, null, 2));

        console.log("New user registered and logged in....");
    } catch (error) {
        console.error('Error during user registration and login:', error);
        throw error;
    }
});
