/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import { gql } from '@apollo/client';

export const users = /* GraphQL */ `
  query Users {
    users {
      id
      name
      email
      password
    }
  }
`;
export const user = /* GraphQL */ `
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
      password
    }
  }
`;
export const contacts = gql`
  query Contacts {
    contacts {
      name
      email
      message
    }
  }
`;
