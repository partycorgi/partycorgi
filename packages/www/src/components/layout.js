/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">Party Corgi!</Link>
      <nav>
        <Link to="/">home</Link>
        <br />
        <Link to="/coc">code of conduct</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </>
);

export default Layout;
