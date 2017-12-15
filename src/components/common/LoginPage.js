import React from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginAction/loginActions';

class PathForm extends React.Component {

 constructor(props) {
    super(props);
//    console.log(NODE_PATH);
    // can not find `this` if not bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs);
    this.props.login({
      username: this.refs.username.value,
      password: this.refs.password.value,
    });
  }

  render() {

    return (
      <div className="path-box">
      {this.props.token.token}
        <form>
        <div>
        User name:
          <input className="current-path-input"
          ref="username" />
        </div>
        <div>
        Password:
          <input className="current-path-input"
          ref="password" />
        </div>

          <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Summit</button>
        </form>
      </div>
    );
  }
}


  const mapStateToProps = (state, ownProps) => {
    return {
      token: state.token,
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      login: token => dispatch(loginActions.onLogin(token))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(PathForm);
