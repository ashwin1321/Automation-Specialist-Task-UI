export async function filterItem(page) {

  await page.locator('div:has-text("Filter") .ant-select-selector').first().click();
  await page.waitForSelector('.ant-select-dropdown');
  await page.locator('.ant-select-dropdown >> text=Last 1 month').click();
}