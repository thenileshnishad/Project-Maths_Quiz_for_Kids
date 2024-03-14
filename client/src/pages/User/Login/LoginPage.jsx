import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formData
  }

  return (
    <div className="login-form">
      <h2>User Login</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
        </label>
        <br />

        <button type="submit">Log In</button>

        <div>
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
