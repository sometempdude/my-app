
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserLogin from '../UserLogin/UserLogin';

class PublicPages extends React.Component {
  render() {
    const { session, match } = this.props;
    if (session) {
      return <Redirect to="/private" />;
    }

    return (
      <Switch>
        <Route exact path={`${match.path}/login`} component={UserLogin} />
        <Redirect to={`${match.path}/login`} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ cachedLS }) => ({
  session: cachedLS.session
});

export default connect(mapStateToProps)(PublicPages);
