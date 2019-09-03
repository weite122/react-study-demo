import React, {Component} from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = ({currentTarget: input}) => {
    const account = {...this.state.account}
    account[input.name] = input.value
    this.setState({account})
  }

  render() {
    const {account} =this.state

    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              value={account.username}
              name="username"
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={account.password}
              name="password"
              id="password" type="text" className="form-control"/>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
