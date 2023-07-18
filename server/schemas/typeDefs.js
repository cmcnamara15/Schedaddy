const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    position: [String!]
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
    address: [Address]
    company: [Company]
  }

  input UserInput {
    _id: ID!
    position: [String!]
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

  type Company {
    _id: ID!
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
    deleteUser(input: UserInput!): User
    addShift(): Shift
    updateShift(): Shift
    deleteShift(): Shift
    addPosition(): Position
    updatePosition(): Position
    deletePosition(): Position
    addAddress(): Address
    updateAddress(): Address
    deleteAddress(): Address
    addCompany(): Company
    updateCompany(): Company
    deleteCompany(): Company
  }
`;

module.exports = typeDefs;
