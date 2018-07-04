import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './page/homepage/Index';
import IndexSpace from './page/mainpage/IndexSpace';


export default (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/user" component={IndexSpace}/>
    </Switch>        
);