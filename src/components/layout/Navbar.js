import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <div className='container'>
        <div className='navbar--title'>
          <span className='material-icons'>{icon}</span>
          <h1>{title}</h1>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Receitas da Laura',
  icon: 'restaurant',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
