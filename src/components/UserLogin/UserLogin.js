// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm/LoginForm';
import { login } from '../../actions/login';

class UserLogin extends React.Component {
  render() {
    const { status, login } = this.props;
    return (
      <div className="user-login">
        <LoginForm loading={status === 'request'} onSubmit={login} />
      </div>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  status: login.status
});

const mapDispatchToProps = dispatch => ({
  login: (...args) => dispatch(login(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
