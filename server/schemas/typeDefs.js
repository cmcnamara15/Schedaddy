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
    Address: [Address]
    Company: [Company]
  }
  
  type Shift {
    _id: ID!
    User: [User]
    Position: String!
    startDateTime: String!
    endDateTime: String!
  }

  Type Position {
    _id: ID!
    jobTitle: String!
  }
  
  Type Company {
    _id: ID!
    CompanyName: String!
    CompanyAddress: [Address]
    CompanyPhone: String!
    CompanyAdmin: [User]
}


  Type Address {
    _id: ID!
    street1: String!
    street2: String
    City: String!
    State: String!
    Zip: String!
    Country: String!
  }

  Type Auth {
    token: ID!
    user: User
  }

  type Query {
    User: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
