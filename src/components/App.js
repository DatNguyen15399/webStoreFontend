import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from '../reducers'
import {
    BrowserRouter as Router,
    Route, Switch, Redirect
} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import ListProductContainer from '../containers/ListProductContainer';
import ViewProduct from './ViewProduct';


class App extends Component {
    
    render() {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <Router>
                    <div className ="container-fluid px-0">
                        <Header/>                        
                        <div className="mx-3">
                            <Switch>
                                <Route exact path="/home" component={ListProductContainer}></Route>
                                <Route exact path="/product/:adc" component={ViewProduct}></Route>
                                <Route exact path="/">
                                    <Redirect to={`/home`}></Redirect>
                                </Route>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;