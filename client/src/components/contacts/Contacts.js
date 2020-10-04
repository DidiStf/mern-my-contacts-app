import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../context/contact/contactContext';

import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add some contacts.</h4>;
  }

  return (
    <TransitionGroup>
      {filtered
        ? filtered.map((filteredContact) => (
            <CSSTransition
              key={filteredContact.id}
              timeout={500}
              classNames='item'>
              <ContactItem contact={filteredContact} />
            </CSSTransition>
          ))
        : contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
    </TransitionGroup>
  );
};

export default Contacts;