import { gql } from "@apollo/client";

export const FIND_ALL_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
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