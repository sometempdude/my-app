// @flow
import * as React from 'react';
import { Button, Input, Form } from '../../FormComponents';
import Validation from 'react-validation-utils';
import { requiredRule } from 'react-validation-utils/build/rules';
import { emailRule } from '../../../core/ValidationRules';

const Validator = new Validation({
  login: [
    {
      rule: requiredRule,
      message: 'Enter the email'
    },
    {
      rule: emailRule,
      message: 'An email should a have a valid shape'
    }
  ],
  password: [
    {
      rule: requiredRule,
      message: 'Enter the password'
    }
  ]
});

class LoginForm extends React.Component {
  static defaultProps = {
    loading: false
  };

  state = Validator.addValidation({
    login: '',
    password: ''
  });

  _onChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      Validator.validate({
        [name]: value
      })
    );
  };

  _onSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    const { login, password } = this.state;

    const { loading } = this.props;

    const errors = Validator.getErrors(this.state);

    return (
      <Form>
        <div className="login-form__field-container">
          <Input
            placeholder="Login"
            name="login"
            id="login"
            value={login}
            onChange={this._onChange}
          />
          <div>{errors.login}</div>
        </div>
        <div className="login-form__field-container">
          <Input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this._onChange}
          />
          <div>{errors.password}</div>
        </div>
        <Button
          label="Log in"
          onClick={this._onSubmit}
          loading={loading}
          disabled={!Validator.isFormValid(this.state)}
        />
      </Form>
    );
  }
}

export default LoginForm;