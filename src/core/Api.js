// @flow
import ApiRequest from './ApiRequest';


export default class Api {
  static login(login, password) {
    return ApiRequest('/redux/api/user/login', 'post', { email: login, password: password} );
  }
}
