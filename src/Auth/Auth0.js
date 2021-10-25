import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0 = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Auth0</button>;
};

export default Auth0;
