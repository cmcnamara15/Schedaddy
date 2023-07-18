const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            unique: true,
            required: true,
        },
        lastName: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            unique: true,
            required: true,
        },
        socialSecurity: {
            type: String,
            unique: true,
            required: true,
        },
        hireDate: {
            type: String,
            unique: true,
            required: true,
        },
        terminationDate: {
            type: String,
            unique: true,
            required: false,
        },
        payRate: {
            type: Number,
            unique: true,
            required: true,
        },
        fullTime: {
            type: Boolean,
            unique: true,
            required: true,
        },
        activeEmployee: {
            type: Boolean,
            unique: true,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            unique: true,
            required: true,
        },
        Address: [AddressSchema],
        Company: [CompanySchema],
    }
)


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})
// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
        return bcrypt.compare(password, this.password);
};
    

const User = model('User', userSchema);

module.exports = User

