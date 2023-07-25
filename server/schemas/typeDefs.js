const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    phone: String
    hireDate: String!
    terminationDate: String
    payRate: Float!
    fullTime: Boolean!
    activeEmployee: Boolean
    isAdmin: Boolean
    shift: [ID]
    userAddress: Address
    userCompany: ID
  }

  input UserInput {
    firstName: String!
    lastName: String!
    phone: String
    hireDate: String!
    terminationDate: String
    payRate: Float!
    fullTime: Boolean
    activeEmployee: Boolean
    isAdmin: Boolean
    userAddress: AddressInput
    userCompany: ID
  }

  type Account {
    _id: ID!
    email: String!
    password: String!
    user: User
  }

  input AccountInput {
    _id: ID!
    email: String!
    password: String!
    user: UserInput
  }

  type Shift {
    _id: ID!
    startDateTime: String!
    endDateTime: String!
    user: User
    position: Position
    note: String
  }

  input ShiftInput {
    startDateTime: String!
    endDateTime: String!
    user: ID!
    position: ID!
    note: String
  }

  type Position {
    _id: ID!
    jobTitle: String!
  }

  input PositionInput {
    jobTitle: String!
    user: ID!
  }

  type Address {
    _id: ID!
    street1: String!
    street2: String
    city: String!
    state: String!
    zip: String!
    user: User
  }

  input AddressInput {
    street1: String!
    street2: String
    city: String!
    state: String!
    zip: String!
  }

  type Company {
    _id: ID!
    companyName: String!
    companyAddress: Address
    companyPhone: String
    companyAdmin: User
  }

  input CompanyInput {
    companyName: String!
    companyAddress: AddressInput
    companyPhone: String
    companyAdmin: ID
  }

  type Auth {
    token: ID!
    account: Account!
    userId: ID
    companyId: ID
    isAdmin: Boolean
  }

  type Query {
    me: Account
    accounts: [Account]
    account(_id: ID!): Account
    users: [User]
    user(_id: ID!): User
    shifts: [Shift]
    shift(_id: ID!): [Shift]
    positions: [Position]
    position(_id: ID!): Position
    addresses: [Address]
    address(_id: ID!): Address
    companies: [Company]
    company(_id: ID!): Company
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createAccount(email: String!, password: String!): Auth
    deleteAccount(_id: ID!): Account
    createUser(input: UserInput!): User
    updateUser(
      _id: ID!
      firstName: String
      lastName: String
      email: String
      phone: String
      payRate: Float
      fullTime: Boolean
      activeEmployee: Boolean
      isAdmin: Boolean
    ): User
    deleteUser(_id: ID!): User
    addShift(input: ShiftInput!): Shift
    updateShift(_id: ID!, startDateTime: String, endDateTime: String): Shift
    deleteShift(_id: ID!): Shift
    addPosition(jobTitle: String!): Position
    updatePosition(_id: ID!, jobTitle: String): Position
    deletePosition(_id: ID!): Position
    addCompany(input: CompanyInput!): Company
    updateCompany(
      _id: ID!
      companyName: String
      companyAddress: String
      companyPhone: String
      companyAdmin: ID
    ): Company
    deleteCompany(_id: ID!): Company
    linkUserAccount(_id: ID!): Account
  }
`;

// type Auth {
//   token: ID!
//   email: String!
//   password: String!
// }

module.exports = typeDefs;
