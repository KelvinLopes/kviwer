import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/homeScreen';
import PostScreen from './screens/postScreen';
import InfoScreen from './screens/Info';
import Places from './screens/places';


export default function Routes() {
    return(
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/posts" exact component={PostScreen} />
                <Route path="/info" exact component={InfoScreen} />
                <Route path="/places" exact component={Places} />
            </Switch>
    );
}