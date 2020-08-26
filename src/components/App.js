import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from '../reducers'
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import ListProductContainer from '../containers/ListProductContainer';


class App extends Component {
    
    render() {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <Router>
                    <div className ="container-fluid px-0">
                        <Header/>                        
                        <Switch>
                            <Route path="/">
                                <ListProductContainer />
                            </Route>
                            <Route from="/home" to="/">

                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;