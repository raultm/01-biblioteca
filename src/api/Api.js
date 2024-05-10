const API_URL = "http://localhost:8090";

const backend = {
    get: async (endpoint) => await (await fetch(`${API_URL}${endpoint}`)).json(),
    post: async (endpoint, data) => await (await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(data)
    }))
}

export let api = {
    members: async () => backend.get("/members"),
    addMember: async (data) => backend.get("/members", data),
}