import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.name}>
          Name
          <input
            className={styles.name_input}
            type="text"
            name="name"
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            className={styles.name_input}
            type="text"
            name="number"
            autoComplete="off"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};