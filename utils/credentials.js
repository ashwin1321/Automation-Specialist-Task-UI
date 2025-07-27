export function genRandomUser() {

    const num = Math.floor(Math.random() * 10000);

    return {
        name: `expenseAppUser${num}`,
        email: `userTest${num}@expense.com`,
        password: `pasworduser123`,
    }
}

genRandomUser()