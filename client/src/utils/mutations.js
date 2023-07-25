import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      token
      account {
        _id
        email
      }
    }
  }`;

export const DELETE_ACCOUNT = gql`
  mutation deleteAccount($id: ID!) {
    deleteAccount(_id: $id) {
        _id
    }
  }`;
  
// Need to figure about passing through position/address/company/account
export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      _id
    }
  }`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UserInput!) {
    updateUser(_id: $id, input: $input) {
      _id
      activeEmployee
      firstName
      fullTime
      hireDate
      isAdmin
      lastName
      payRate
      phone
      terminationDate
      userAddress {
        city
        state
        street1
        street2
        zip
      }
      userCompany {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
        _id
    }
  }`;

export const ADD_SHIFT = gql`
  mutation addShift($input: ShiftInput!) {
    addShift(input: $input) {
      _id
      startDateTime
      endDateTime
      user {
        _id
        firstName
        lastName
      }
      position {
        _id
        jobTitle
      }
      note
    }
  }
`;

export const UPDATE_SHIFT = gql`
  mutation updateShift($id: ID!, $startDateTime: String!, $endDateTime: String!){
    updateShift(_id: $id, startDateTime: $startDateTime, endDateTime: $endDateTime){
      _id
      startDateTime
      endDateTime
    }
  }`;

export const DELETE_SHIFT = gql`
  mutation deleteShift($id: ID!) {
    deleteShift(_id: $id) {
        _id
    }
  }`;

export const ADD_POSITION = gql`
  mutation addPosition($jobTitle: String!) {
    addPosition(jobTitle: $jobTitle) {
        _id
        jobTitle
    }
  }`;

export const UPDATE_POSITION = gql`
  mutation updatePosition($id: ID!, $jobTitle: String){
    updatePosition(_id: $id, jobTitle: $jobTitle){
      _id
      jobTitle 
    }
  }`;

export const DELETE_POSITION = gql`
  mutation deletePosition($id: ID!) {
    deletePosition(_id: $id) {
      _id
    }
  }`;


// ADDRESSES// 

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
  }`;

export const UPDATE_COMPANY = gql`
  mutation updateCompany(
      $id: ID!, 
      $companyName: String,
      $companyPhone: String,
  ) {
    updateCompany(_id: $id, 
        companyName: $companyName,
        companyPhone: $companyPhone
    ) {
      _id
      companyName
      companyPhone
    }
  }`;

export const DELETE_COMPANY = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(_id: $id) {
        _id
    }
  }`;

  export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      account {
        _id
        email
      }
      userId
      companyId
      isAdmin
    }
  }`;

  export const LINK_USER_ACCOUNT = gql`
  mutation LinkUserAccount($id: ID!) {
    linkUserAccount(_id: $id) {
      token
      account {
        _id
        email
      }
      userId
      companyId
      isAdmin
    }
  }
`;