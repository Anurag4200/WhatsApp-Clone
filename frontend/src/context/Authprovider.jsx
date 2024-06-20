import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token") || localStorage.getItem("ChatApp");
      if (token) {
        try {
          const jwtDecode = (await import("jwt-decode")).default; // Dynamic import
          const decoded = jwtDecode(token);
          setAuthUser(decoded);
        } catch (error) {
          console.error('Invalid token', error);
          setAuthUser(null);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
