import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Set initial value based on your app's logic.
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <UserContext.Provider value={{ isNewUser, setIsNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
