import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'jill@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContactAction = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete Contact
  const deleteContactAction = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // Set Current Contact
  const setCurrentContactAction = (contact) => {
    dispatch({
      type: SET_CURRENT_CONTACT,
      payload: contact,
    });
  };

  // Clear Current Contact
  const clearCurrentContactAction = () => {
    dispatch({
      type: CLEAR_CURRENT_CONTACT,
    });
  };

  // Update Contact
  const updateContactAction = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter Contacts
  const filterContactsAction = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // Clear Filter
  const clearFilterAction = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContactAction,
        deleteContactAction,
        updateContactAction,
        setCurrentContactAction,
        clearCurrentContactAction,
        filterContactsAction,
        clearFilterAction,
      }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;