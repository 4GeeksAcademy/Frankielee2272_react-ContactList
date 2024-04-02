import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="mt-5">
      <Link className="d-flex" to="/add-contact">
        <button className="ms-auto btn btn-primary">Add new contact</button>
      </Link>

      <div>
        <h1 className="text-center">List Contacts</h1>

        {store.contacts.map((contact) => (
          <div className="d-flex justify-content-center">
            <div className="me-5">
              <img
                className=""
                height="100px"
                src="https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png"
              />
            </div>
            <div>
              <h4>{contact.name}</h4>
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
            <div className="ms-5">
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