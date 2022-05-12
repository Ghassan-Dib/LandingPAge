import React from 'react';
import ContactCard from './ContactCard';
import { useQuery } from '@apollo/client';
import { CONTACTS_QUERY } from '../resolvers/Query';
import { contacts } from '../graphql/queries';

interface Contact {
  name: string;
  email: string;
  message: string;
}

interface ContactData {
  contacts: Contact[];
}

const ContactsList = () => {
  const { data } = useQuery<ContactData, Contact>(contacts);
  return (
    <div className="contacts-list">
      {data && (
        <>
          {data.contacts.map((contact: Contact) => (
            <ContactCard
              key={contact.email}
              name={contact.name}
              email={contact.email}
              message={contact.message}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ContactsList;
