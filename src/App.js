import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {auth} from "./firebase/firebase.utils";

class App extends Component{

    constructor(props) {
        super(props);

        this.state={
            currentUser:null,
        }
    }

    unsubscribeFromAuth=null;

    componentDidMount() {
      this.unsubscribeFromAuth =  auth.onAuthStateChanged(user =>{
            this.setState({currentUser:user})

            console.log(user)
        } )
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
