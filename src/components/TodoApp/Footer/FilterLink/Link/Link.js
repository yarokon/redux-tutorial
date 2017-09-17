import React from 'react';

const Link = ({
  active,
  onClick,
  children
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

export default Link;
