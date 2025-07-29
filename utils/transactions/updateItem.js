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