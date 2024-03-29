import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);

  const changeMikeName = () => {
    actions.changeContactProperty("Mike A", "address", "toronto");
  };
  return (
    <div>
      <h1>Add Contact</h1>
      {store.contacts.map((contact) => (
        <div>
          <span>{contact.name}</span>
          {contact.address}
        </div>
      ))}
      <button onClick={changeMikeName}>Change mike's address</button>
    </div>
  );
};
