import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

import { Component } from 'react';
import { ContactForm } from './PhoneBook/PhoneBook';

import { ContactsList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  contactsFormSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    const isInName = newContact.name.toLowerCase();
    this.state.contacts.find(contact => contact.name.toLowerCase() === isInName)
      ? alert(data.name + ' is already in contacts')
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  getVisibleNameFilter = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filterName = this.getVisibleNameFilter();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactsFormSubmitHandler} />

        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleChangeFilter} />
          <ul>
            <ContactsList
              contacts={filterName}
              onDelContact={this.deleteContact}
            />
          </ul>
        </div>
      </div>
    );
  }
}
