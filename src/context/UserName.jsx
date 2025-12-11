import { createContext, useContext, useReducer, useState } from "react";

const profileContext = createContext();

export function ProfileProvider({ children }) {
  const [name, setName] = useState("");
  return (
    <profileContext.Provider value={{ name, setName }}>
      {children}
    </profileContext.Provider>
  )
}

export function useProfile() {
  return useContext(profileContext);
}


