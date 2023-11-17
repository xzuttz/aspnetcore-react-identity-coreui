import React, { Component, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import Layout from './components/Layout';

import './scss/style.scss'

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, requireAuth, ...rest } = route;
            return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
          })}
        </Routes>
      </Layout>
    )
  }
}

export default App
