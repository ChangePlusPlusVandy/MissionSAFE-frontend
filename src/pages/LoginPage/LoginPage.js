import React from "react"
import Firebase from "../../util/Firebase"
import "./LoginPage.scss"
import "../../App.scss"
import UserContext from "../../context/UserContext"


class LoginPage extends React.Component {

    static contextType = UserContext;

    state = {
        email: "",
        password: "",
    };

    handleLogin = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        console.log(email, password); // check if the state is updated, debug for PR
        try {
            const user = await Firebase.loginUser(email, password);
            this.context.onLogin(user); // update user info at the top level
        } catch (err) {
            console.log(err);
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="column-container">
                <p>Login</p>
                <form onSubmit={this.handleLogin}>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage