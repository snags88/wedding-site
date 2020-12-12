import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ children, ...props }) =>
  <Link activeClassName="nav-list__link--active" className="nav-list__link" {...props}>{children}</Link>;

export default NavLink;
