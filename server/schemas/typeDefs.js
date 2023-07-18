const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    socialSecurity: String!
    hireDate: String!
    terminationDate: String
    payRate: Float!
    fullTime: Boolean!
    activeEmployee: Boolean!
    isAdmin: Boolean!
    position: [Position]
    address: [Address]
    company: [Company]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    socialSecurity: String!
    hireDate: String!
    terminationDate: String
    payRate: Float!
    fullTime: Boolean!
    activeEmployee: Boolean!
    isAdmin: Boolean!
    position: [Position]
    address: [Address]
    company: [Company]
  }

  type Shift {
    _id: ID!
    user: [User]
    startDateTime: String!
    endDateTime: String!
  }

  type Position {
    _id: ID!
    jobTitle: String!
  }

  type Address {
    _id: ID!
    street1: String!
    street2: String
    city: String!
    state: String!
    zip: String!
    country: String!
  }

  input addressInput {
    street1: String!
    street2: String
    city: String!
    state: String!
    zip: String!
    country: String!
  }

  type Company {
    _id: ID!
    companyName: String!
    companyAddress: [Address]
    companyPhone: String!
    companyAdmin: [User]
  }

  input companyInput {
    companyName: String!
    companyAddress: [Address]
    companyPhone: String!
    companyAdmin: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    user(_id: ID!): User
    shift: [Shift]
    shift(_id: ID!): Shift
    position: [Position]
    position(_id: ID!): Position
    address: [Address]
    address(_id: ID!): Address
    company: [Company]
    company(_id: ID!): Company
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createAccount(email: String!, password: String!): Auth
    createUser(input: UserInput!): User
    updateUser(input: UserInput!): User
    deleteUser(_id: ID!): User
    addShift(_id: ID!, startDateTime: String!, endDateTime: String!, user: ID!): Shift
    updateShift(_id: ID!, startDateTime: String!, endDateTime: String!, user: ID!): Shift
    deleteShift(_id: ID!): Shift
    addPosition(_id: ID!, jobTitle: String!): Position
    updatePosition(_id: ID!, jobTitle: String!): Position
    deletePosition(_id: ID!): Position
    addAddress(input: addressInput!): Address
    updateAddress(input: addressInput!): Address
    deleteAddress(_id: ID!): Address
    addCompany(input: companyInput!): Company
    updateCompany(input: companyInput!): Company
    deleteCompany(_id: ID!): Company
  }
`;

module.exports = typeDefs;

// Shift mutation needs a user? How do we want to do that?
