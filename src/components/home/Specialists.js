import React from 'react';
import Carousel from './Carousel';

class Specialists extends React.Component {
    render() {
        return (
            <section className="specialists">
                <div className="specialists__head">
                    <p>Наши специалисты</p>
                </div>               
                <Carousel/>

            </section>
        )
    }
}

export default Specialists;