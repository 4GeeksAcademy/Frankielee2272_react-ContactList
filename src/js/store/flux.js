const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          "full_name": "Dave Bradley",
          "email": "dave@gmail.com",
          "agenda_slug": "Frankielee2272",
          "address": "47568 NW 34ST, 33434 FL, USA",
          "phone": "7864445566"
        }
      ],
    },
    actions: {
      getContacts: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/Frankielee2272"
        )
          .then((response) => response.json())
          .then((data) => setStore({ contacts: data }))
          .catch((error) => console.log("There was an error: ", error));
      },
    },
  };
};

export default getState;
