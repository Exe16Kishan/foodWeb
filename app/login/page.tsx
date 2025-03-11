// app/login/page.tsx
"use client";

import { signIn, signUp } from "@/lib/auth-client";
import { useState } from "react";
// import { signIn, signUp } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSignup) {
      // Sign-up
      const response = await signUp.email({
        email,
        password,
        name,
      });
      if (response?.error) {
        setError(response.error.message || "Sign-up failed");
      }
    } else {
      // Sign-in
      const response = await signIn.email({
        email,
        password,
        callbackURL:'/dashboard'
      })
      if (response?.error) {
        setError(response.error.message || "Invalid credentials");
      }
    }
  };

  return (
    <div>
      <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {isSignup && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        )}
        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
        {error && <p>{error}</p>}
      </form>
      <button onClick={() => setIsSignup(!isSignup)}>
        Switch to {isSignup ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
}