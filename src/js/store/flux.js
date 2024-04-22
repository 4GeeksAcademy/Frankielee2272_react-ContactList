const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/frankielee/contacts")
					.then((response) => {
						if (response.ok) {
							return response.json();
						}
					})
					.then((body) => {
						console.log (body);
						setStore({
							contacts: body.contacts
						});
					});

			},
			deleteContact: id=> {
				fetch(`https://playground.4geeks.com/contact/agendas/frankielee/contacts/${id}`, {
					method: "DELETE",
					// body: JSON.stringify(id),
					headers: { "Content-Type": "application/json" }
				})
				.then((response) => {
					if (response.ok) {
						getActions().getContacts();
					}
					else
					{
						console.error("Failed to delete contact. Status: ", response.status)
					}
				})
				.then((body)=>{
                    console.log(body);
                    getActions().getContacts()
                })
				.catch(error => {
					//Handle any network or other errors that occur during the request
					console.error("Error deleting contact: ", error)
				})
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

			},
			changeColor: (index, color) => {

				const store = getStore();


				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;