import * as React from 'react';

const preventFunc = event => event.preventDefault();

/**
 * Form component
 */
const Form = ({ children }) => {
  return <form onSubmit={preventFunc}>{children}</form>;
};

export { Form };