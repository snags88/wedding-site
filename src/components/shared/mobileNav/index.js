import React, { useState } from 'react';
import SlideToggle from 'react-slide-toggle';
import IosMenu from 'react-ionicons/lib/IosMenu'
import IosClose from 'react-ionicons/lib/IosClose'

import NavLink from './components/navLink';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(0);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
    setToggleEvent(Date.now());
  };

  return (
    <SlideToggle
      duration={600}
      collapsed
      toggleEvent={toggleEvent}
    >
      {({ setCollapsibleElement }) => (
        <div className="mobile-nav d-md-none">
          <div
            className={`mobile-nav__trigger ${isOpen ? '' : 'mobile-nav__trigger--bg'}`}
            role="switch"
            tabIndex="-1"
            onClick={onToggleClick}
            onKeyPress={onToggleClick}
            aria-checked={isOpen}
          >
            <button>
              { isOpen
                  ? <IosClose color='black' className="icon icon--md"/>
                  : <IosMenu color='white' className="icon icon--md"/>
              }
            </button>
          </div>
          <ul className="mobile-nav-list" ref={setCollapsibleElement}>
            <li style={{paddingTop: '47px'}}><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/story">Our Story</NavLink></li>
            <li><NavLink to="/location">When & Where</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            <li><NavLink to="/rsvp">RSVP</NavLink></li>
            <li style={{paddingBottom: '47px'}}>
              <a href="https://www.zola.com/registry/sherilynandseiji" className="mobile-nav-list__link" target="_blank" rel="noreferrer">Registry</a>
            </li>
          </ul>
        </div>
      )}
    </SlideToggle>
  );
};

export default MobileNav;
