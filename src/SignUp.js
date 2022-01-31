import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h3>Sign Up For Water Your Plants!</h3>
      </div>
    );
  }
}
import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

             

                <div className="form-group">
                    <label>user name</label>
                    <input type="text" className="form-control" placeholder="create user name" />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="phone number" className="form-control" placeholder="Enter Phone Number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}
