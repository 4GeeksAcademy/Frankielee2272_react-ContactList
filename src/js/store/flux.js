const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
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
