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