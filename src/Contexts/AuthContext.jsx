import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const [token, setToken] = React.useState(null);

  //;

  const login = () => {
    setIsAuth(true);
    // navigate(`/Login`);
  };

  const logout = () => {
    setIsAuth(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, login, logout, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
