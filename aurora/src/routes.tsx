import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/homeScreen';
import PostScreen from './screens/postScreen';
import InfoScreen from './screens/Info';
import Places from './screens/places';
import AuroraAlfa from './screens/postScreen/posts/auroraalfa';
import AuroraPlaces from './screens/postScreen/posts/auroraplaces';


export default function Routes() {
    return(
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/posts" exact component={PostScreen} />
                <Route path="/info" exact component={InfoScreen} />
                <Route path="/places" exact component={Places} />
                <Route path="/aurora_alfa_version" exact component={AuroraAlfa}/>
                <Route path="/aurora_places" exact component={AuroraPlaces} />
            </Switch>
    );
}