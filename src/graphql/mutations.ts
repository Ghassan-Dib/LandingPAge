/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact($name: String!, $email: String!, $message: String!) {
    createContact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact($name: String!, $email: String!, $message: String!) {
    updateContact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact($email: String!) {
    deleteContact(email: $email)
  }
`;
