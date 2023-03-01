import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react'
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/register">Sign Up</NavLink>
          <NavLink to="/login">Sign In</NavLink>
        </nav>
      </header>
      {/* <Suspense fallback={<Loader />}> */}
      <main>
        <Outlet />
      </main>
      {/* </Suspense> */}
    </>
  )
}
