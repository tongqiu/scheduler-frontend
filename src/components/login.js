import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { getToken } from '../actions';

class Login extends Component {

  renderField(field) {
    const {meta} = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.getToken(values, () => {
      this.props.history.push('/');
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Username"
          name="username"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={this.renderField}
        />
      <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please enter a username';
  }
  if (!values.email) {
    // TODO: check for email validity
    errors.email = 'Please enter a valid email address';
  }
  if (!values.password) {
    // TODO: check for email validity
    errors.password = 'Please enter a password';
  }
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(null, { getToken })(Login)
);
