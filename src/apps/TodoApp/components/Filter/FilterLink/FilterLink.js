import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ROOT_PATH } from '../../../../../index';

const FilterLink =({ filter, children }) => (
  <NavLink
    className="button"
    exact
    to={filter === 'all' ? `${ROOT_PATH}` : `${ROOT_PATH}/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
);


FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
