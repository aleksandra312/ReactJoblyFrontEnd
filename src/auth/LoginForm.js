import React, { useState } from "react";
import JoblyApi from "../api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const INITIAL_STATE = { username: "", password: "" };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const res = await JoblyApi.login(formData);
    if (res.success) {
      navigate("/companies");
    }
  }

  return (
    <div className="LoginForm">
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
