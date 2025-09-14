import React, { createContext } from "react";

type Props = {};

const AuthContext = createContext(null);

export default function AuthProvider({}: Props) {
  return (
    <AuthContext.Provider value={{}}>
      <div>AuthContext</div>
    </AuthContext.Provider>
  );
}
