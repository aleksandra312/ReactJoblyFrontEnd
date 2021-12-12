import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = { username: "", password: "" };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const res = await login(formData);
    if (res.success) {
      navigate("/companies");
    } else {
      setFormErrors(res.errors);
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
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
