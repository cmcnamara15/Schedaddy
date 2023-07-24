const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const { Account, Address, Company, Position, Shift, User } = require('../models/index.js');

async function seedDb() {
    try {
        const fakeAccounts = Array.from({ length: 50 }, () => ({
            email: faker.internet.email(),
            password: faker.internet.password(),
        }));

        const fakeCompanies = Array.from({ length: 5 }, () => ({
            companyName: faker.company.name(),
            companyPhone: faker.phone.number('512-###-####'),
        }));

        const fakePositions = Array.from({ length: 10 }, () => ({
            jobTitle: faker.person.jobTitle(),
        }));

        const fakeShifts = Array.from({ length: 100 }, () => ({
            startDateTime: faker.date.future(),
            endDateTime: faker.date.future(),
        }));

        const fakeUsers = Array.from({ length: 50 }, () => ({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            phone: faker.phone.number('512-###-####'),
            hireDate: faker.date.past(),
            payRate: faker.number.octal({ min: 20000, max: 150000 }),
            fullTime: faker.datatype.boolean(),
            activeEmployee: faker.datatype.boolean(),
            isAdmin: faker.datatype.boolean(),
        }))
        
        const accounts = await Account.insertMany(fakeAccounts);

        const users = [];

        for (let i = 0; i < fakeUsers.length; i++) {
            const fakeUser = fakeUsers[i];
            // embed the address schema within each user document
            fakeUser.address = {
                street1: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zip: faker.location.zipCode(),
                country: faker.location.country(),
            };

            // set some employees with termination date and some null(active)
            if (faker.datatype.boolean()) {
                fakeUser.terminationDate = faker.date.past();
                } else {
                fakeUser.terminationDate = null;
                }

            // if null, activeEmployee = true
            fakeUser.activeEmployee = fakeUser.terminationDate === null;

            // create the user document with the reference to its corresponding account
            const user = await User.create(fakeUser);
            const account = accounts[i];
            account.user = user._id;
            await account.save();
            users.push(user);
        } 

        await Company.insertMany(fakeCompanies);
        await Position.insertMany(fakePositions);
        await Shift.insertMany(fakeShifts);

        console.log('Database seeding completed successfully!');
    } catch (err) {
        console.error('Error seeding the database', err);
    }
}

async function connectAndSeed() {
    try {
        await mongoose.connect('mongodb://localhost:27017/userDb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
        await seedDb();
    } catch (err) {
        console.error('Error connecting to the database', err);
    } finally {
        mongoose.disconnect();
        console.log('Disconnected from the database');
    }
}

connectAndSeed();
