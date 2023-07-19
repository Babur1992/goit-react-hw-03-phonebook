import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    // contacts:[],
  };

//   componentDidMount() {
//     console.log('did Mount');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('App did update');

//     if (
//       this.state.name !== prevState.name ||
//       this.state.number !== prevState.number ||
//       this.state.contacts !== prevState.contacts
//     ) {
//       console.log('NEW!!!');

//       localStorage.setItem('name', JSON.stringify(this.state.name));
//       localStorage.setItem('number', JSON.stringify(this.state.number));
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

  handleChange = evnt => {
    console.log(evnt.currentTarget.value);
    const { name, value } = evnt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        {/* <input type="password" name="password" /> */}
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
