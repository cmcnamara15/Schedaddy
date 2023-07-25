import { gql } from "@apollo/client";

export const FIND_ME = gql`
  query me {
    me {
      _id
      user {
        _id
        firstName
        lastName
        phone
        userAddress {
          street1
          street2
          city
          state
          zip
        }
        payRate
        hireDate
        terminationDate
        userCompany {
          _id
        }
        activeEmployee
        fullTime
        isAdmin
      }
    }
  }
`;

export const FIND_ALL_ACCOUNTS = gql`
  query accounts {
    accounts {
      _id
      email
      password
    }
  }
  `;

export const FIND_SINGLE_ACCOUNT = gql`
  query account($id: ID!) {
    account(_id: $id){
      _id
      email
      user {
        _id
        userCompany
      }
    }
  }
  `;

export const FIND_ALL_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      phone
      payRate
      hireDate
      terminationDate
      activeEmployee
      fullTime
      isAdmin
      userCompany {
        _id
      }
      userAddress {
        street1
        street2
        city
        state
        zip
      }
    }
  }
`;

export const FIND_SINGLE_USER = gql`
  query user($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
    } 
  }
  `;

export const FIND_ALL_SHIFTS = gql`
  query shifts {
    shifts {
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

export const FIND_SINGLE_SHIFT = gql`
  query shift($id: ID!) {
    shift(_id: $id){
      _id
      endDateTime
      endDateTime
    }
  }
  `;

export const FIND_ALL_POSITIONS = gql`
  query positions {
    positions {
      _id
      jobTitle
    }
  }
  `;

export const FIND_SINGLE_POSITION = gql`
  query position($id: ID!) {
    position(_id: $id){
      _id
      jobTitle
    }
  }
  `;

  export const FIND_ALL_COMPANIES = gql`
    query companies {
    companies {
      _id
      companyName
      companyPhone
    }
  }
  `;

export const FIND_SINGLE_COMPANY = gql`
  query company($id: ID!) {
    company(_id: $id){
      _id
      companyName
      companyPhone
    }
  }
  `;
