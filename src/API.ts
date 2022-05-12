/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  password: string,
};

export type Contact = {
  __typename: "Contact",
  name: string,
  email: string,
  message: string,
};

export type CreateUserMutationVariables = {
  name: string,
  email: string,
  password: string,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
  },
};

export type CreateContactMutationVariables = {
  name: string,
  email: string,
  message: string,
};

export type CreateContactMutation = {
  createContact:  {
    __typename: "Contact",
    name: string,
    email: string,
    message: string,
  },
};

export type UpdateContactMutationVariables = {
  name: string,
  email: string,
  message: string,
};

export type UpdateContactMutation = {
  updateContact:  {
    __typename: "Contact",
    name: string,
    email: string,
    message: string,
  },
};

export type DeleteContactMutationVariables = {
  email: string,
};

export type DeleteContactMutation = {
  deleteContact: string,
};

export type UsersQuery = {
  users?:  Array< {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
  } > | null,
};

export type UserQueryVariables = {
  id: string,
};

export type UserQuery = {
  user?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
  } | null,
};

export type ContactsQuery = {
  contacts?:  Array< {
    __typename: "Contact",
    name: string,
    email: string,
    message: string,
  } > | null,
};
