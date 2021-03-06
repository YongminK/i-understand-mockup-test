import React from 'react';
import Intro from '../home/Intro';
import Situation from '../home/Situation';
import Work from '../home/Work';
import Specialists from '../home/Specialists';
import Blog from '../home/Blog';
import Trust from '../home/Trust';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Intro/>
                <Situation/>
                <Work/>
                <Specialists/>
                <Blog/>
                <Trust/>
            </div>
        )
    }
}

export default Home;