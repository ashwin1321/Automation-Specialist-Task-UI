export async function deleteItenm(page) {

    await page.locator('tbody .ant-table-row').first().locator('[role="img"][aria-label="delete"]').waitFor({ state: "visible" })
    await page.locator('tbody .ant-table-row').first().locator('[role="img"][aria-label="delete"]').click()

}