// This file is of no use. Due to limited time, user registration part is skipped

export async function clickRegister(page) {
    await page.locator('a[href="/register"]').click();
}

export async function userRegistration(page, name, email, password){
    await page.fill('#name', name);
    await page.fill('#email', email);
    await page.fill('#password', password );
   await page.getByRole('button', { name: 'Register' }).click();
}

