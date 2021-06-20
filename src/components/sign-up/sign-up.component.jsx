import "./sign-up.styles.scss"
import {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


 export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert("password does not match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
        } catch (e) {
            console.log(e);
        }

    }
    handleChange = event => {
        // this.saveState()
        let {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (<div className={'sign-up'}>
            <h1 className={'title'}>I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit} className={'sign-up-form'}>
                <FormInput type={"text"} value={displayName}
                           label={"Display Name"} name={'displayName'}
                           handleChange={this.handleChange} required/>
                <FormInput type={"email"} value={email}
                           label={"Email"} name={'email'}
                           handleChange={this.handleChange} required/>
                <FormInput type={"password"} value={password}
                           label={"Password"} name={'password'}
                           handleChange={this.handleChange} required/>
                <FormInput type={"password"} value={confirmPassword}
                           label={"Confirm Password"} name={'confirmPassword'}
                           handleChange={this.handleChange} required/>
                <CustomButton type={'submit'}>Sign Up</CustomButton>
            </form>

        </div>);
    }
}
