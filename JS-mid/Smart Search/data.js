const fakeUsers = (count = 10) => {
    let users = []
    while (users.length != count) {
        users.push(
            {
                name: faker.name.findName(),
                avatar: `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${faker.random.number(999)}.jpg`,
                lastOnline: faker.random.number(59)
            }
        )
    }
    return users;
}

