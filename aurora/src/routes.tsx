import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/homeScreen';
import PostScreen from './screens/postScreen';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/posts" exact component={PostScreen} />
            </Switch>
        </BrowserRouter>

    );
}