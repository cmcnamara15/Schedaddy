const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    phone: String!
    socialSecurity: String!
    hireDate: String!
    terminationDate: String
    payRate: Float!
    fullTime: Boolean!
    activeEmployee: Boolean!
    isAdmin: Boolean!
    shift: Shift
    position: Position
    address: Address
    company: Company
    account: Account
  }

  input UserInput {
    firstName: String!
    lastName: String!
    phone: String!
    socialSecurity: String!
    hireDate: String!
    terminationDate: String
    payRate: Float!
    fullTime: Boolean!
    activeEmployee: Boolean!
    isAdmin: Boolean!
    shift: [ShiftInput]
    position: PositionInput
    address: AddressInput
    company: CompanyInput
    account: AccountInput
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
  }

  input ShiftInput {
    startDateTime: String!
    endDateTime: String!
    user: ID!
  }

  type Position {
    _id: ID!
    jobTitle: String!
    user: User
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
    country: String!
    user: User
  }

  input AddressInput {
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
    companyAddress: Address
    companyPhone: String!
    companyAdmin: User
  }

  input CompanyInput {
    companyName: String!
    companyAddress: AddressInput
    companyPhone: String!
    companyAdmin: ID!
  }

  type Auth {
    token: ID!
    email: String!
    password: String!
  }

  type Query {
    accounts: [Account]
    account(_id: ID!): Account
    users: [User]
    user(_id: ID!): User
    shifts: [Shift]
    shift(_id: ID!): Shift
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
    addPosition(_id: ID!, jobTitle: String!): Position
    updatePosition(_id: ID!, jobTitle: String): Position
    deletePosition(_id: ID!): Position
    addAddress(input: AddressInput!): Address
    updateAddress(
      _id: ID!
      street1: String!
      street2: String
      city: String!
      state: String!
      zip: String!
      country: String!
    ): Address
    deleteAddress(_id: ID!): Address
    addCompany(input: CompanyInput!): Company
    updateCompany(
      _id: ID!
      companyName: String
      companyAddress: String
      companyPhone: String
      companyAdmin: ID
    ): Company
    deleteCompany(_id: ID!): Company
  }
`;

module.exports = typeDefs;
