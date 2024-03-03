import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const RegisterPage = () => {
  const {registerUser} = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setPassword2] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    registerUser(email, username, password, confirm_password)
  }

  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
            <input
                type="email"
                id="form2Example17"
                className="register-input"
                placeholder="Email Address"
                onChange={e => setEmail(e.target.value)}
            />
            </div>
            <div className="input-container">
            <input
                type="text"
                id="form2Example17"
                className="register-input"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
            />
            </div>
            <div className="input-container">
            <input
                type="password"
                id="form2Example17"
                className="register-input"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            </div>
            <div className="input-container">
            <input
                type="password"
                id="form2Example27"
                className="register-input"
                placeholder="Confirm Password"
                onChange={e => setPassword2(e.target.value)}
            />
            </div>

            <button
                className="btn form-btn"
                type="submit"
            >
                Register
            </button>

            <p>
            Have an account?{" "}
                <Link to="/login">
                Login now
                </Link>
            </p>
        </form>
      </>
    </div>
  )
}

export default RegisterPage