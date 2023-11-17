import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import DefaultLayout from "../layout/DefaultLayout";
import { NavMenu } from "./NavMenu";
import authService from "./api-authorization/AuthorizeService";

import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const currentURL = window.location.href; // returns the absolute URL of a page

  // const pathname = window.location.pathname;
  const { pathname } = useLocation();
  useEffect(() => {
    const subscription = authService.subscribe(() => populateState());
    populateState();

    return () => {
      authService.unsubscribe(subscription);
    };
  }, []);

  const populateState = async () => {
    const [isAuth] = await Promise.all([authService.isAuthenticated()]);

    setIsAuthenticated(isAuth);
  };

  return (
    <div>
      {!(pathname === "/dashboard" && isAuthenticated)  &&
      // {
        <div>
          <NavMenu />
          <Container>{children}</Container>
        </div>
      }

      {((!(
        pathname === "/counter" ||
        pathname === "/fetch-data" ||
        pathname === "/authentication/profile" ||
        pathname === "/"
      ) &&
        isAuthenticated) 
        // ||
        // (pathname === "/dashboard" && !isAuthenticated)
        ) && <DefaultLayout />}
    </div>
  );
};

export default Layout;