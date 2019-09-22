import React from 'react';

class Intro extends React.Component {
    render() {
        return (
            <section className="intro">
                <div className="intro__introduce">
                    <p className="introduce__text">
                        Мы служба дистанционной психологической помощи.
                    </p>
                </div>
                <div className="intro__description">
                    <p className="description__text">
                        Мы команда психологов, психотерапевтов, менеджеров и других
                        специалистов – созданы для того, чтобы помочь любому человеку
                        стать хотя бы немного счастливее.
                    </p>
                </div>
                <div className="intro__button">
                    <a href="javascript:window.location.reload()" className="button__green">Подробнее</a>
                </div>
            </section>
        )
    }
}

export default Intro;