import { useState } from "react";

export default function Login() {

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const validateEmail = input.email !=='' && !input.email.includes('@') 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.email,input.password)
    setInput({
      email:'',
      password:''
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...input,
      [name]:value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label
            htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <div className="control-error">
            {validateEmail ? <p>Invalid email</p> : null}
          </div>
        </div>

        <div className="control no-margin">
          <label
            htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button
          className="button button-flat">
          Reset
        </button>

        <button
          className="button">
          Login
        </button>
      </p>
    </form>
  );
} 
