import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query users {
    users {
      _id
      firstName
      lastName
    }
  }
  `;