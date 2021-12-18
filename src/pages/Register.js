import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/auth";

export default function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    image_url: "",
    accepted_terms_conditions: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(register(userData));
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            required
            maxLength='255'
            className="form-control" 
            id="firstName"
            placeholder="First name"
            autoComplete="on"
            value={userData.first_name}
            onChange={({ target }) =>
              setUserData({ ...userData, first_name: target.value })
            }
          />
        </div>
        <div className="form-group">
    <label htmlFor="lastName">Last name</label>
          <input
            required
            maxLength='255'
            className="form-control" 
            id="lastName"
            placeholder="Last name"
            autoComplete="on"
            value={userData.last_name}
            onChange={({ target }) =>
              setUserData({ ...userData, last_name: target.value })
            }
          />
        </div>
        <div className="form-group">
    <label htmlFor="email">Email</label>
          <input
            required
            maxLength='255'
            type="email"
            className="form-control" 
            id="email"
            placeholder="Email"
            autoComplete="on"
            value={userData.email}
            onChange={({ target }) =>
              setUserData({ ...userData, email: target.value })
            }
          />
        </div>
        <div className="form-group">
    <label htmlFor="password">Password</label>
          <input
            required
            minLength='8'
            type="password"
            className="form-control" 
            id="password"
            placeholder="Password"
            autoComplete="new-password"
            value={userData.password}
            onChange={({ target }) =>
              setUserData({ ...userData, password: target.value })
            }
          />
        </div>
        <div className="form-group">
    <label htmlFor="confirmPassword">Confirm password</label>
          <input
            required
            minLength='8'
            type="password"
            className="form-control" 
            id="confirmPassword"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={userData.password_confirmation}
            onChange={({ target }) =>
              setUserData({ ...userData, password_confirmation: target.value })
            }
          />
        </div>

          <div className="form-group">
          <label htmlFor="imageUrl">Image url</label>
          <input
            required
            className="form-control" 
            id="imageUrl"
            placeholder="Image url"
            autoComplete="on"
            value={userData.image_url}
            onChange={({ target }) =>
              setUserData({ ...userData, image_url: target.value })
            }
          />
        </div>

         <div className="form-check">
          <input
           required
            type="checkbox"
            className="form-check-input"
            value={userData.accepted_terms_conditions}
            onChange={({ target }) => {
              setUserData({
                ...userData,
               accepted_terms_conditions: target.checked,
              });
            }}
          />
          <label className="form-check-label">Accepted terms conditions</label>
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}