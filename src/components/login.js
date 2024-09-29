import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/xplore/Migration-of-EB-and-ComEX-to-IEEE-Xplore/`)
    }

    return (
      <>
        {/* <h1>Log in</h1> */}
        <form
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event)
            // navigate(`/xplore/profile`);
            navigate(`/xplore/Migration-of-EB-and-ComEX-to-IEEE-Xplore/`)
          }}
        >
          <label>
            &nbsp;&nbsp;&nbsp;&nbsp;Please log in with your username:&nbsp;
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            &nbsp;and password:&nbsp;
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login
