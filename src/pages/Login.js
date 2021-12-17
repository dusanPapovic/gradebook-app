import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login ,selectErrorAuth} from "../store/auth";

export default function Login() {
  const dispatch = useDispatch();
  const errors = useSelector(selectErrorAuth);
  //   const store = useSelector(state=>state)
  // console.log('stottttttttt,store',store)

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(login(credentials));
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {errors && <div>{errors.message}</div> }
        <div>
          <input
            required
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={({ target }) =>
              setCredentials({ ...credentials, email: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={({ target }) =>
              setCredentials({ ...credentials, password: target.value })
            }
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}