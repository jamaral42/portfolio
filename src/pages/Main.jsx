import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";


const Main = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const envUser = process.env.REACT_APP_USERNAME || "";
    const envPass = process.env.REACT_APP_PASSWORD || "";

    useEffect(() => {
        if (!envUser || !envPass) setError("Login not configured in environment.");
    }, [envUser, envPass]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (username === envUser && password === envPass) {
            if (typeof setUser === "function") setUser({ name: username });
            setUsername("");
            setPassword("");
        } else {
            setError("Invalid username or password.");
        }
    };

    const handleLogout = () => {
        if (typeof setUser === "function") setUser(null);
    };

    return (
        <main style={{ maxWidth: 420, margin: "48px auto", padding: 20, border: "1px solid #eee", borderRadius: 8 }}>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
                    <div style={{ marginBottom: 8 }}>
                        <label style={{ display: "block", marginBottom: 4 }}>Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label style={{ display: "block", marginBottom: 4 }}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </main>
    );
};

export default Main;