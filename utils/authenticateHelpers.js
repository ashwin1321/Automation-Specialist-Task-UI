export async function clickRegister(page) {
    await page.locator('a[href="/register"]').click();
}

export async function userRegistration(page, name, email, password){
    await page.fill('#name', name);
    await page.fill('#email', email);
    await page.fill('#password', password );
   await page.getByRole('button', { name: 'Register' }).click();
}

export async function userLogin(page, name, password) {
    await page.fill('#name', name);
    await page.fill('#password', password );
    await page.getByRole('button', { name: 'Login' }).click();

}