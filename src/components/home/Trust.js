import React from 'react';

class Trust extends React.Component {
    render() {
        return (
            <section className="trust">
                <div>
                    <p className="trust__head">Нам доверяют</p>
                    <div className="trust__companys">
                        <div className="companys__block__img companys__block__img--1"></div>
                        <div className="companys__block__img companys__block__img--2"></div>
                        <div className="companys__block__img companys__block__img--3"></div>
                    </div>
                </div>
                <div className="companys__block__arrow"></div>
            </section>
        )
    }
}

export default Trust;