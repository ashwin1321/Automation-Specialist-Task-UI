export async function createNewItem(page, amount, type, date, category, reference, description) {
  await page.waitForSelector('form');
  await page.getByLabel('Amount').fill(amount);

  await page.locator('#type').click();
  await page.waitForSelector('.ant-select-dropdown');
  await page.locator('.ant-select-dropdown').getByText(type, { exact: true }).click();

  await page.locator('#category').click();
  await page.waitForSelector('.ant-select-dropdown');
  await page.locator('.ant-select-dropdown').getByText(category, { exact: true }).click();

  await page.fill('#date', date);

  await page.getByLabel('Reference').fill(reference);
  await page.getByLabel('Description').fill(description);

  await page.getByRole('button', { name: 'SAVE' }).click();
}
