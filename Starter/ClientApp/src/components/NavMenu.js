import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginMenu from './api-authorization/LoginMenu';
import './NavMenu.css';
import routes from '../routes'
import { v8IntrinsicIdentifier } from '@babel/types';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const pathName = window.location.pathname;
        //const pageNotFound = routes.find(a => a.path === pathName)
        var arr = [
            "", "counter", "fetch-data", "dashboard","authentication"
        ]
            

        return (
            <div>
                {!(pathName.includes("/dashboard") || !arr.includes(pathName.split('/')[1].toLocaleLowerCase())) &&
                    <header>
                        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                            <NavbarBrand tag={Link} to="/">Starter</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/dashboard">Dashboard</NavLink>
                                    </NavItem>
                                    <LoginMenu>
                                    </LoginMenu>
                                </ul>
                            </Collapse>
                        </Navbar>
                    </header>

                }</div>
        );

    }
}
