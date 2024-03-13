import React, { useState } from "react"
import "./RegisterPage.css"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    std: "",
    add_line: "",
    city: "",
    mobileNo: "",
    secQts: "",
    secAns: "",
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
    const {
      name,
      email,
      password,
      std,
      add_line,
      city,
      mobileNo,
      secQts,
      secAns,
    } = formData
  }

  return (
    <div className="registration-form">
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-part">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </label>
          <br />

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
            Standard:
            <select
              name="std"
              value={formData.std}
              onChange={handleChange}
              required
            >
              <option value="">Select standard</option>
              <option value="1">Standard 1</option>
              <option value="2">Standard 2</option>
              <option value="3">Standard 3</option>
              <option value="4">Standard 4</option>
              <option value="5">Standard 5</option>
            </select>
          </label>
          <br />

          <label>
            Address:
            <input
              type="text"
              name="add_line"
              value={formData.add_line}
              onChange={handleChange}
              required
              placeholder="Address line..."
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="City name"
            />
          </label>
        </div>

        <div className="form-part">
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
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

          <label>
            Choose question:
            <select
              name="secQts"
              value={formData.secQts}
              onChange={handleChange}
              required
            >
              <option value="">Select any question</option>
              <option value="animal">What animal do you like the most?</option>
              <option value="friend">
                What is the name of your best friend?
              </option>
              <option value="hobby">
                What is your favorite hobby or activity?
              </option>
            </select>
          </label>
          <br />

          <label>
            Answer here:
            <input
              type="text"
              name="secAns"
              value={formData.secAns}
              onChange={handleChange}
              required
              placeholder="Enter answer"
            />
          </label>

          <div className="alrdyacc">Have an account? Log in</div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
