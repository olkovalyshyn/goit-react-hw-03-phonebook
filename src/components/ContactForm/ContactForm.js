import React, { Component } from "react";

import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", number: "" });
    this.props.onAdd(this.state.name, this.state.number);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>

        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            className={s.input}
            value={this.state.number}
            onChange={this.handleChange}
          ></input>
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
