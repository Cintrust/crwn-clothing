import "./sign-in.styles.scss"
import {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }


    handleChange = event => {
        // this.saveState()
        let {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        // this.saveState()
        event.preventDefault();
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({
                email: "",
                password: "",

            })
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        return (
            <form className='sign-in' onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <FormInput
                    name={"email"}
                    type={"email"}
                    value={this.state.email}
                    required
                    label={"email"}
                    handleChange={this.handleChange}/>
                <FormInput
                    name={"password"}
                    type={"password"}
                    value={this.state.password}
                    required
                    label={"password"}
                    handleChange={this.handleChange}/>
                <div className="buttons">
                    <CustomButton type={"submit"}>Sign In</CustomButton>
                    <CustomButton type={'button'} onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>


            </form>
        );
    }
}
