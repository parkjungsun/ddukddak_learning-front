import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/userFunction";

class SignInForm extends Component {
  renderField(field) {
    return (
      <div>
        <input
          className="blank"
          type={field.label}
          {...field.input}
          placeholder={field.meta.error}
        />
      </div>
    );
  }
  onSubmit(values) {
    this.props.signIn(values, path => {
      this.props.history.push(`${path}`);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="email" label="email" component={this.renderField} />
        <Field name="pw" label="password" component={this.renderField} />
        <button className="blank" type="submit">
          로그인
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "이메일을 입력하세요!";
  }
  if (!values.pw) {
    errors.pw = "비밀번호를 입력하세요!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "SignIn"
})(withRouter(connect(null, { signIn })(SignInForm)));
