import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import JoblyApi from "../api/api";
import UserContext from "../auth/UserContext";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const INITIAL_STATE = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
    setFormErrors([]);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();

    let username = formData.username;
    let userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let updatedUser;

    try {
      updatedUser = await JoblyApi.updateCurrentUser(username, userData);
    } catch (errors) {
      setFormErrors(errors);
      return;
    }

    setFormData((data) => ({ ...data, password: "" }));
    setFormErrors([]);
    setCurrentUser(updatedUser);
  }

  return (
    <div className="Profile">
      <h3>Edit Profile</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <p>{formData.username}</p>
        <label>First Name</label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Confirm password to make changes:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : (
          <Alert
            type="success"
            messages={["successfully updated user info."]}
          />
        )}

        <button className="btn btn-primary btn-block mt-4">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
