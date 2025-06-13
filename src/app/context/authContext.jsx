// context/AuthContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ role: "user" });

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "John", role: "admin" }); // mock role

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
