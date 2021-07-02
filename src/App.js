import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import Checkout from "./pages/checkout-page/checkout-page.component";

class App extends Component {

    unsubscribeFromAuth = null;

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {

                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {

                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })

                    console.log(snapshot.data())
                })
                // this.setState({
                //     currentUser: {
                //         id:userRef.id,
                //         ...userRef.data()
                //     }
                // })
                console.log(userRef)
            } else {

                setCurrentUser(null)
            }

            // console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    renderHelper = () => {
        // console.log({args})
        return this.props.currentUser ? <Redirect to={'/'}/> : <SignInAndSignUpPage/>
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/" exact={true} component={HomePage}/>
                    <Route path="/shop"  component={ShopPage}/>
                    <Route path="/checkout" exact={true} component={Checkout}/>
                    <Route path="/sign-in" exact={true}
                           render={this.renderHelper}
                        /*component={SignInAndSignUpPage}*/ />
                </Switch>

            </div>
        );
    }


}

const mapStateToProps = createStructuredSelector( {
        currentUser: selectCurrentUser
    })


const mapDispatchToProps = (dispatch) => {

    return {
        setCurrentUser: (user) => dispatch(setCurrentUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
