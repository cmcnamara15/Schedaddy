const { Account, Address, Company, Position, Shift, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent) => {
      console.log("users block");
      const users = await User.find({});
      return users;
    },
    user: async (parent, args, context) => {
      console.log("user_id block");
      console.log(args);
      const user = await User.findOne(args);
      return user;
    },
    shifts: async (parent) => {
      console.log("shifts block");
      const shifts = await Shift.find({});
      return shifts;
    },
    shift: async (parent, args, context) => {
      console.log("shift_id block");
      console.log(args);
      const shift = await Shift.findOne(args);
      return shift;
    },
    positions: async(parent) => {
      console.log("positions block");
      const positions = await Position.find({});
      return positions;
    },
    position: async(parent, args, context) => {
      console.log("position_id block");
      console.log(args);
      const position = await Position.findOne(args);
      return position;
    },
    // ***Addresses***
    companies: async(parent) => {
      console.log("company block");
      const companies = await Company.find({});
      return companies;
    },
    company: async(parent, args, context) => {
      console.log("company_id block");
      console.log(args);
      const company = await Company.findOne(args);
      return company;
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      console.log("create user block");
      console.log(args.input);
      const user = await User.create(args.input);
      return user;
    },
    createAccount: async (parents, args) => {
      console.log("create account block");
      console.log(args);
      const account = await Account.create(args);
      return account;
    },
    addShift: async (parent, args) => {
      console.log("add shift block");
      console.log(args.input);
      const shift = await Shift.create(args.input);
      return shift;
    },
    addPosition: async (parent, args) => {
      console.log("add position block");
      console.log(args);
      const position = await Position.create(args);
      return position;
    },
    addCompany: async (parent, args) => {
      console.log("add company block");
      console.log(args.input);
      const company = await Company.create(args.input);
      return company;
    },
    // ***Addresses***
  },
};

module.exports = resolvers;