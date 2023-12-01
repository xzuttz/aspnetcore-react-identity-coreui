import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import DefaultLayout from "../layout/DefaultLayout";
import { NavMenu } from "./NavMenu";
import authService from "./api-authorization/AuthorizeService";

import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const currentURL = window.location.href; // returns the absolute URL of a page
    var pages = [
        "", "counter", "fetch-data", "dashboard","authentication"
    ]
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
            {!(pathname.includes("/dashboard") && isAuthenticated) &&
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
                pathname === "/" ||
                !pages.includes(pathname.split('/')[1].toLocaleLowerCase())
            ) &&
                isAuthenticated)
                // ||
                // (pathname === "/dashboard" && !isAuthenticated)
            ) && <DefaultLayout />}
        </div>
    );
};

export default Layout;
