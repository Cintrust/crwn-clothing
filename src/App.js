import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends Component {

    unsubscribeFromAuth = null;

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {

                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
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
                this.setState({
                    currentUser: null
                })
            }

            // console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route path="/" exact={true} component={HomePage}/>
                    <Route path="/shop" exact={true} component={ShopPage}/>
                    <Route path="/sign-in" exact={true} component={SignInAndSignUpPage}/>
                </Switch>

            </div>
        );
    }


}

export default App;
