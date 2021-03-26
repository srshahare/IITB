import React from "react";

const Signup = ({
  userSignUp,
  inputHandler
}) => {
  return (
    <div>
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="name"
            onChange={inputHandler}
            className="form-control"
            placeholder="User Name"
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={inputHandler}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button onClick={userSignUp} type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
