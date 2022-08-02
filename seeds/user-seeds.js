const { User } = require('../models');

const userData = [
    {
        id: 1,
        name: "Ira Strubhar",
        username: "irastrubhar",
        password: "rocky",
        email: "taylor.strubhar@gmail.com",
        phone: "727-793-4382"
    },
    {
        id: 2,
        name: "Olivia McKee",
        username: "oliviamckee",
        password: "phoebe",
        email: "olivia.mckee97@gmail.com",
        phone: "214-901-5752"
    },
    {
        id: 3,
        name: "Nick Schenck",
        username: "yoyo4games",
        password: "31Aloe13",
        email: "yoyo4games@yahoo.com",
        phone: "952-686-1324"
    },
    {
        id: 4,
        name: "Zac Guse-Humphrey",
        username: "zwhumphrey",
        password: "password",
        email: "zwhumphrey@icloud.com",
        phone: "651-666-0986"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;