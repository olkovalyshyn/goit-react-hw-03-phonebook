import React, { Component } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import shortid from "shortid";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : this.setState((prevState) => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = (idForDelete) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== idForDelete
      ),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  visibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h3>Find contacts by name</h3>
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <h2>Contacts</h2>
        <ContactList
          contacts={this.visibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
