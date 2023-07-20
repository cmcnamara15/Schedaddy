import { gql } from "@apollo/client";
  
export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
       _id
       firstName
       lastName
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

export const ADD_POSITION = gql`
  mutation addPosition($id: ID!, $jobTitle: String!) {
    addPosition(_id: $id, jobTitle: $jobTitle) {
      _id
      jobTitle
    }
  }
  `;

export const ADD_COMPANY = gql`
    mutation addCompany($input: CompanyInput!) {
    addCompany(input: $input) {
       _id
       companyName
       companyPhone
    }
  }
  `;