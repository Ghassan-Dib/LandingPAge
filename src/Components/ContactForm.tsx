import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { API } from 'aws-amplify';
import { contacts } from '../graphql/queries';
import {
  createContact as createContactMutation,
  deleteContact as deleteContactMutation
} from '../graphql/mutations';

interface ContactDetails {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [contact, setContact] = useState<ContactDetails>({
    name: '',
    email: '',
    message: ''
  });
  const createContact = async () => {
    await API.graphql({
      query: createContactMutation,
      variables: {
        name: contact.name,
        email: contact.email,
        message: contact.message
      }
    });
  };
  // const [createContact] = useMutation<{ createContact: ContactDetails }>(createContactMutation, {
  //   variables: {
  //     name: contact.name,
  //     email: contact.email,
  //     message: contact.message
  //   },
  //   refetchQueries: [contacts]
  // });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    createContact();
    setContact({ name: '', email: '', message: '' });
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const handleChangeTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  return (
    <form className="container__form" onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <input
        value={contact.name as string}
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        onChange={handleChange}
        required
      />
      <input
        value={contact.email as string}
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
        onChange={handleChange}
        required
      />
      <textarea
        value={contact.message as string}
        name="message"
        id="message"
        placeholder="Your message"
        onChange={handleChangeTextArea}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
