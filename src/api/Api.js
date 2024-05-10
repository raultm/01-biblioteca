const API_URL = "http://localhost:8090";

export let api = {

    members: async () => {
        let response = await fetch(`${API_URL}/members`)
        return await response.json()
    },

    addMember: async (data) => {
        console.log(data)
        let response = await fetch(`${API_URL}/members`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "accept": "application/hal+json"
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    },

}