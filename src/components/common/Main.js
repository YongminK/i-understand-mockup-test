import React from 'react';
import Home from './Home';
import Questions from './Questions';
import { Route, Switch } from 'react-router-dom';


class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/questions' component={Questions} />
            </Switch>
        )
    }
}

export default Main;