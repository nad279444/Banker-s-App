import React from "react";
import { connect } from "react-redux";
import { registerWithEmail, loginWithGoogle } from "../store/authActions";

function Register(props) {
  if (!props.auth.isLoaded) return null;

  if (props.auth.uid) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmail(email, password);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <button type="submit"> Register</button>
        <br />
        <button onClick={props.loginWithGoogle}>
          <img
            src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
            width="100"
            alt="google"
          />
        </button>
      </form>
    </div>
  );
}
const mSTP = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = {
  registerWithEmail,
  loginWithGoogle,
};

export default connect(mSTP, mapDispatchToProps)(Register);
