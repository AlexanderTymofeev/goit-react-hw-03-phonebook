import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.form}>
    {contacts.map((contact) => (
      <li className = {styles.formItem}key={contact.id}>
        {contact.name + " : " + contact.number}
        {
          <button
            className={styles.btn}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.defaultProps = {
    contacts: []
}


ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ContactList;