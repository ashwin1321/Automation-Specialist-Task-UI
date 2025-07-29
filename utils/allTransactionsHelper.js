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

export async function updateItem(page, amount, description) {
  await page.waitForSelector('form');
  await page.getByLabel('Amount').fill(amount);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const dat = String(today.getDate()).padStart(2, '0');
  const todayDate = `${year}-${month}-${dat}`;

  await page.fill('#date', todayDate);

  await page.getByLabel('Description').fill(description);

  await page.getByRole('button', { name: 'SAVE' }).click();
}


export async function filterItem(page) {

  await page.locator('div:has-text("Filter") .ant-select-selector').first().click();
  await page.waitForSelector('.ant-select-dropdown');
  await page.locator('.ant-select-dropdown >> text=Last 1 month').click();
}