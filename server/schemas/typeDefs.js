const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
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
  }

  type Shift {
    _id: ID!
    user: User
    startDateTime: String!
    endDateTime: String!
  }

  type Position {
    _id: ID!
    user: User
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
    user: User
  }

  type Company {
    _id: ID!
    companyName: String!
    companyAddress: Address
    companyPhone: String!
    companyAdmin: User
  }
  
  input ShiftInput {
    user: ID!
    startDateTime: String!
    endDateTime: String!
  }
  
  input PositionInput {
    user: ID!
    jobTitle: String!
  }
  
  input AddressInput {
    street1: String!
    street2: String
    city: String!
    state: String!
    zip: String!
    country: String!
  }
  
  input CompanyInput {
    companyName: String!
    companyAddress: AddressInput
    companyPhone: String!
    companyAdmin: ID!
  }
  
  input UserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
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
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
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
    createUser(input: UserInput!): User
    updateUser(firstName: String!, lastName: String!, email: String!, phone: String, payRate: Float!, fullTime: Boolean!, activeEmployee: Boolean!, isAdmin: Boolean!): User 
    deleteUser(_id: ID!): User
    addShift(input: ShiftInput!): Shift
    updateShift(_id: ID!, startDateTime: String!, endDateTime: String!): Shift
    deleteShift(_id: ID!): Shift
    addPosition(_id: ID!, jobTitle: String!): Position
    updatePosition(_id: ID!, jobTitle: String!): Position
    deletePosition(_id: ID!): Position
    addAddress(input: AddressInput!): Address
    updateAddress(_id: ID!, street1: String!, street2: String, city: String!, state: String!, zip: String!, country: String!): Address
    deleteAddress(_id: ID!): Address
    addCompany(input: CompanyInput!): Company
    updateCompany(_id: ID!, companyName: String!, companyAddress: String, companyPhone: String!, companyAdmin: ID!): Company
    deleteCompany(_id: ID!): Company
  }
`;

module.exports = typeDefs;

// Shift mutation needs a user? How do we want to do that?
