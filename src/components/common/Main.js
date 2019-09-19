import React from 'react';
import Intro from '../home/Intro';
import Situation from '../home/Situation';
import Work from '../home/Work';
import Specialists from '../home/Specialists';
class Main extends React.Component{
    render(){
        return(
            <div>
                <Intro/>
                <Situation/>
                <Work/>
                <Specialists/>
            </div>
        )
    }
}

export default Main;