// @flow
import * as React from 'react';

const defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  readOnly: false,
  name: null,
  id: null
};

const Input = ({
  value,
  type,
  label,
  name,
  placeholder,
  id,
  readOnly,
  onFocus,
  onBlur,
  onChange
}) => {
  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        value={value}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = defaultProps;

export { Input };
