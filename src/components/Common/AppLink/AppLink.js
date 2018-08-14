import * as React from 'react';
import { Link } from 'react-router-dom';

const AppLink = ({ to, href, target, onClick, children }) => {
  if (typeof to !== 'undefined') {
    return (
      <Link className={styles.routeLink} to={to}>
        {children}
      </Link>
    );
  }

  if (typeof to === 'undefined') {
    return (
      <a className={styles.href} href={href} onClick={onClick} target={target}>
        {children}
      </a>
    );
  }
};

export { AppLink };