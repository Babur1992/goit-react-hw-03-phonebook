import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

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
// import PropTypes from 'prop-types';
// import style from './ContactItem.module.css';

// export const ContactItem = ({ id, name, number, onDeleteContact }) => {
//   return (
//     <li key={id} id={id} className={style['item']}>
//       <button
//         onClick={() => onDeleteContact(id)}
//         className={style['button']}
//         type="Submit"
//       >
//         x
//       </button>
//       <div className={style['wrapper']}>
//         <p className={style['text']}>{name}:</p>
//         <p className={style['number']}>{number}</p>
//       </div>
//     </li>
//   );
// };

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
