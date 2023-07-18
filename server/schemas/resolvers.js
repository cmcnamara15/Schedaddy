const { User, Company, Address } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
        if (context.user) {
            return User.find({ _id: context.user._id});
        }
        throw new Error("user not found");
    },
  },
}
