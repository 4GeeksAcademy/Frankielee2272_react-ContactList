import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <Link to="/add-contact">
        <button className="btn btn-primary">Add new contact</button>
      </Link>
      <div>
        <h1>List Contacts</h1>
        {store.contacts.map((contact) => (
          <div>
            <div>
              <img src="..." />
            </div>
            <div>
              <h4>{contact.full_name}</h4>
              <p>
                <i class="fa-solid fa-location-dot"></i>
                {contact.address}
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>
                {contact.phone}
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i>
                {contact.email}
              </p>
            </div>
            <div>
              <button>
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
