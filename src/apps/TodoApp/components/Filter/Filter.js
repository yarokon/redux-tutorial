import React from 'react';

import FilterLink from './FilterLink/FilterLink';
import { ALL, ACTIVE, COMPLETED } from '../../actions/filterNames';

const Filter = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter={ALL}
      >
        All
      </FilterLink>
      {' | '}
      <FilterLink
        filter={ACTIVE}
      >
        Active
      </FilterLink>
      {' | '}
      <FilterLink
        filter={COMPLETED}
      >
        Completed
      </FilterLink>
    </p>
  );
};

export default Filter;
