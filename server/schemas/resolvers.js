const { User, Company, Address } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent) => {
      console.log("hello");
      const users = await User.find({})
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      console.log("hello");
      console.log(args.input);
      const user = await User.create( args.input );
      return user
    },
    createAccount: async (parents, args) => {
      console.log(args);
      const user = await User.create({
        email: args.email,
        password: args.password,
      });
    },
  },
};

module.exports = resolvers;
