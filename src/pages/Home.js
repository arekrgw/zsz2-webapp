import React, { Component } from 'react'
import { isSignedInByCookies } from '../utils/utilities';
import history from '../utils/history';
import { Route } from 'react-router-dom';

import Radio from './Radio';

class Home extends Component {
    componentWillMount(){
        !isSignedInByCookies() && history.push("/login");
    }
    render() {
        return (
            <div>
                Home
                <Route path="/music" component={Radio} />
            </div>
        )
    }
}

export default Home;
