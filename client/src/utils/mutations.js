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