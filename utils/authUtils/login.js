export async function userLogin(page, name, password) {
    await page.fill('#name', name);
    await page.fill('#password', password );
    await page.getByRole('button', { name: 'Login' }).click();

}