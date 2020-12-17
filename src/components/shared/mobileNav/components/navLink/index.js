import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ children, ...props }) =>
  <Link activeClassName="mobile-nav-list__link--active" className="mobile-nav-list__link" {...props}>{children}</Link>;

export default NavLink;
