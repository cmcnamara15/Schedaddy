import { gql } from "@apollo/client";
  
export const LOGIN_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
       _id
       firstName
       lastName
    }
  }
`;