import React, { useState } from "react";
import useSetState from "./useSetState";

import "./UserSignup.css";

const initialState = {
  userName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  investmentInterest: false,
};

const UserSignup = () => {
  const [state, setState] = useSetState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    clear();
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    const target = event.target.name;
    setState({
      [event.target.name]:
        target === "investmentInterest"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleCheckbox = (event) => {
    console.log(event.target.checked);
  };
  const clear = () => {
    setState(initialState);
  };

  return (
    <>
      <form className="UserSignup" onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          value={state.userName}
          required
          onChange={handleChange}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={state.email}
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          value={state.passwordConfeiremation}
          required
          onChange={handleChange}
        />
        <label htmlFor="investmentInterest" className="UserSignup--checkbox">
          <input
            id="investmentInterest"
            name="investmentInterest"
            type="checkbox"
            checked={state.investmentInterest}
            onChange={handleChange}
          />
          Do you want to maybe help us out with an angel investment?
        </label>
        <input type="Submit" />
      </form>
      <section>
        <pre>
          <code>{JSON.stringify(state, null, 4)}</code>
        </pre>
      </section>
    </>
  );
};

export default UserSignup;
