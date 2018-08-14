// @flow
import * as React from 'react';

const defaultProps = {
  label: '',
  type: 'submit',
  onClick: null,
  loading: false,
  disabled: false
};

/**
 * Button component
 * @author Chernenko Alexander <ca@nullgr.com>
 */
const Button = ({ type, label, loading, onClick, disabled }) => {
  return (
    <button
      className="button"
      type={type}
      onClick={!loading ? onClick : null}
      disabled={disabled}
    >
      {!loading ? label : '...Loading'}
    </button>
  );
};

Button.defaultProps = defaultProps;

export { Button };