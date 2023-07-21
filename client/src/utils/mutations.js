import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
       _id
       email
       password
    }
  }
  `;

export const DELETE_ACCOUNT = gql`
  mutation deleteAccount($id: ID!) {
    deleteAccount(_id: $id) {
      _id
    }
  }
`;
  
export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
       _id
       firstName
       lastName
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
    }
  }
  `;

export const ADD_SHIFT = gql`
  mutation addShift($input: ShiftInput!) {
    addShift(input: $input) {
      _id
      startDateTime
      endDateTime
    }
  }
  `;

export const DELETE_SHIFT = gql`
  mutation deleteShift($id: ID!) {
    deleteShift(_id: $id) {
      _id
    }
  }
  `;

export const ADD_POSITION = gql`
  mutation addPosition($id: ID!, $jobTitle: String!) {
    addPosition(_id: $id, jobTitle: $jobTitle) {
      _id
      jobTitle
    }
  }
  `;

export const DELETE_POSITION = gql`
  mutation deletePosition($id: ID!) {
    deletePosition(_id: $id) {
      _id
    }
  }
  `;

export const ADD_COMPANY = gql`
  mutation addCompany($input: CompanyInput!) {
    addCompany(input: $input) {
      _id
      companyName
      companyPhone
      companyAddress {
        _id
        city
        country
        state
        street1
        zip
      }
    }
  }
`;

export const DELETE_COMPANY = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(_id: $id) {
      _id
    }
  }
  `;