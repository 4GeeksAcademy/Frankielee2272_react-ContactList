const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
       
      ],
    },
    actions: {
      getContacts: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/Frankielee2272/contacts"
        )
          .then((response) => response.json())
          .then((data) => setStore({ contacts: data.contacts}))
          .catch((error) => console.log("There was an error: ", error));
      },
    },
  };
};

export default getState;
