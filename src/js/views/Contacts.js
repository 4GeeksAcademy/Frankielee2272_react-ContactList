import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
  const [state, setState] = useState({
    showModal: false,
  });
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getContacts();
  }, []);

  const [contactIdToDelete, setContactIdToDelete] = useState();

  return (
    <div className="container">
      <div>
        <p className="text-right my-3">
          <Link className="btn btn-success" to="/add">
            Add new contact
          </Link>
        </p>
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            {store?.contacts?.map((contact, index) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onEdit={() => navigate(`/contacts/${contact.id}`)}
                onDelete={() => {
                  setState({ showModal: true });
                  setContactIdToDelete(contact.id);
                }}
              />
            ))}
          </ul>
        </div>
      </div>
      // ...other code...

<Modal
  show={state.showModal}
  onClose={() => setState({ showModal: false })}
  onConfirm={async () => {
    // Check if the contactIdToDelete is set and not false
    if (contactIdToDelete) {
      try {
        const response = await fetch(
          `https://playground.4geeks.com/contact/frankielee/contacts/${contactIdToDelete}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          // Contact deleted successfully
          console.log(`Contact with ID ${contactIdToDelete} deleted successfully.`);
          // Now, refresh the contacts list
          await actions.getContacts();
        } else {
          // Handle the error if the server doesn't return a success status
          console.error(`Failed to delete contact with ID ${contactIdToDelete}. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error during deletion:", error);
      }
    } else {
      console.error("No contact ID to delete.");
    }

    // Reset the contactIdToDelete and close the modal after attempting the deletion
    setContactIdToDelete(null);
    setState({ showModal: false });
  }}
/>

    </div>
  );
}