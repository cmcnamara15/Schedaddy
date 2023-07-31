const mongoose = require('mongoose');
const moment = require('moment');
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
            companyAddress: {
                street1: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state({ abbreviated: true }),
                zip: faker.location.zipCode(),
                country: faker.location.country(),
            }
        }));

        const fakePositions = Array.from({ length: 10 }, () => ({
            jobTitle: faker.person.jobTitle(),
        }));

        const fakeShifts = Array.from({ length: 100 }, () => {
            const startDateTime = faker.date.future(); // future date for start time
            startDateTime.setMinutes(0); // Set the minutes to 0
            startDateTime.setSeconds(0); // Set the seconds to 0
            
            const endDateTime = new Date(startDateTime); // new Date object based on start time
            endDateTime.setHours(startDateTime.getHours() + 4); // add four hours to get end time

            return {
                startDateTime,
                endDateTime,
                note: faker.lorem.sentence(),
            };
        });

        const fakeUsers = Array.from({ length: 50 }, () => ({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            phone: faker.phone.number('512-###-####'),
            hireDate: moment(faker.date.past()).format('YYYY-MM-DD'),
            payRate: faker.number.octal({ min: 20000, max: 150000 }),
            fullTime: faker.datatype.boolean(),
            activeEmployee: faker.datatype.boolean(),
            isAdmin: faker.datatype.boolean(),
        }));
        
        const accounts = await Account.insertMany(fakeAccounts);

        const users = [];

        for (let i = 0; i < fakeUsers.length; i++) {
            const fakeUser = fakeUsers[i];
            // embed the address schema within each user document
            fakeUser.userAddress = {
                street1: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state({ abbreviated: true }),
                zip: faker.location.zipCode('#####'),
                country: faker.location.country(),
            };

            // set some employees with termination date and some null(active)
            if (faker.datatype.boolean()) {
                fakeUser.terminationDate = moment(faker.date.past()).format('YYYY-MM-DD');
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

        const companies = await Company.insertMany(fakeCompanies);

        const positions = await Position.insertMany(fakePositions); // Save the actual Position documents

        // populate user and position fields for Shift documents
        for (let i = 0; i < fakeShifts.length; i++) {
            const fakeShift = fakeShifts[i];

            // randomly select a user from the array
            const randomUser = users[Math.floor(Math.random() * users.length)];

            // randomly select a position from the actual positions stored in the database
            const randomPosition = positions[Math.floor(Math.random() * positions.length)];

            fakeShift.user = randomUser._id;
            fakeShift.position = randomPosition._id;

            await Shift.create(fakeShift);
        }

        console.log('Database seeding completed successfully!');
    } catch (err) {
        console.error('Error seeding the database', err);
    }
}

async function connectAndSeed() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/userDb', {
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