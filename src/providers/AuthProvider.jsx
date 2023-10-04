import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [axiosInstance] = useAxiosSecure();

  // sign in existing users
  const signInUser = (userData) => {
    setLoading(true);
    return fetch(`${import.meta.env.VITE_SERVER_URL}/login-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => res.json());
  };

  // get the currently signed-in user
  // observer auth state change

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = window.localStorage.getItem("trip-aero-token");
    if (token) {
      axiosInstance.post("/user-data", token).then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          setLoading(false);
        } else {
          console.error("Failed to fetch user data: ", res.status);
        }
      });
    }
  }, [axiosInstance]);

  // logout user
  const logOutUser = () => {
    window.localStorage.removeItem("trip-aero-token");
  };

  const authInfo = { user, loading, signInUser, logOutUser };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
