import React from 'react';
import PropTypes from 'prop-types'

const Link = ({
  active,
  onClick,
  children,
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    // eslint-disable-next-line jsx-a11y/href-no-hash
    <a
      href="#" 
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link;
