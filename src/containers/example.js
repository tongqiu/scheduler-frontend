import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetToken } from '../actions';
import { bindActionCreators } from 'redux';

class ExampleComponent extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.resetToken();
  }

  render() {
      return (
        <div>
          <p>{this.props.token || 'Not Authorized'}</p>
          {!this.props.token &&
            <Link to="/login">
               <button className="btn btn-primary">
                  Login
               </button>
             </Link>
          }
          {this.props.token &&
            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
          }
        </div>
      )
   }
}

function mapStateToProps(state) {
    return({
      'token': state.user.token
    })
}

export default connect(mapStateToProps, {resetToken})(ExampleComponent)
