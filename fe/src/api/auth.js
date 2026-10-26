const API_URL = import.meta.env.VITE_API_URL;


export async function register(name ,username, password) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name,username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Register failed");
    }
    return data;
}

export async function login(username, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
}