import React from 'react';

import NavLink from './components/navLink';

const DesktopNav = () => {
  return (
    <div className="nav u-border-b-grey d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="nav-list">
              <li><NavLink to="/" >Home</NavLink></li>
              <li><NavLink to="/story">Our Story</NavLink></li>
              <li><NavLink to="/location">When & Where</NavLink></li>
              <li><NavLink to="/photos">Photos</NavLink></li>
              <li><NavLink to="/rsvp">RSVP</NavLink></li>
              <li><a href="https://www.zola.com/registry/sherilynandseiji" className="nav-list__link" target="_blank" rel="noreferrer">Registry</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
