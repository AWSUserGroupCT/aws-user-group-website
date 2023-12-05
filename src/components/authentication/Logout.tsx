import { Fragment, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
  }, [isAuthenticated, logout]);

  return (
    <Fragment>
      
    </Fragment>
  );
};

export default Logout;