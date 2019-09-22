import React from 'react';
import Slider from "react-slick";
import '../../style/slick.min.css';
import '../../style/slick-theme.min.css';

export default class Carousel extends React.Component {
    render() {
        var settings = {
            dots: true
          };
        return (
            <Slider {...settings}>
                <div className="carousel__item">
                    <div className="specialists__logo">
                        <div className="specialists__logo__img"></div>
                        <p className="specialists__logo__desc">Психотеропевт</p>
                    </div>
                    <div className="specialists__name">
                        <p>Елизавета Сергеевна</p>
                    </div>
                    <siv className="specialists__description">
                        <p className="specialists__description__experience">
                            Опыт работы: 25 лет
                                        </p>
                        <p className="specialists__description__study">
                            Окончила Ярославский медицинский университет.
                                        </p>
                        <p className="specialists__description__text">
                            Работала в поликлинике №2. Врачом стать мечтала, эта профессия нравится потому, что она нужна людям. После работы много гуляю пешком и занимаюсь спортом – врач должен быть в форме.
                                        </p>
                    </siv>
                </div>
                <div className="carousel__item">
                    <div className="specialists__logo">
                        <div className="specialists__logo__img"></div>
                        <p className="specialists__logo__desc">Психотеропевт</p>
                    </div>
                    <div className="specialists__name">
                        <p>Елизавета Сергеевна</p>
                    </div>
                    <div className="specialists__description">
                        <p className="specialists__description__experience">Опыт работы: 25 лет</p>
                        <p className="specialists__description__study">
                            Окончила Ярославский медицинский университет.
                                        </p>
                        <p className="specialists__description__text">
                            Работала в поликлинике №2. Врачом стать мечтала, эта профессия нравится потому, что она нужна людям. После работы много гуляю пешком и занимаюсь спортом – врач должен быть в форме.
                                        </p>
                    </div>
                </div>
                <div className="carousel__item">
                    <div className="specialists__logo">
                        <div className="specialists__logo__img"></div>
                        <p className="specialists__logo__desc">Психотеропевт</p>
                    </div>
                    <div className="specialists__name">
                        <p>Елизавета Сергеевна</p>
                    </div>
                    <div className="specialists__description">
                        <p className="specialists__description__experience">Опыт работы: 25 лет</p>
                        <p className="specialists__description__study">
                            Окончила Ярославский медицинский университет.
                                        </p>
                        <p className="specialists__description__text">
                            Работала в поликлинике №2. Врачом стать мечтала, эта профессия нравится потому, что она нужна людям. После работы много гуляю пешком и занимаюсь спортом – врач должен быть в форме.
                                        </p>
                    </div>
                </div>
                <div className="carousel__item">
                    <div className="specialists__logo">
                        <div className="specialists__logo__img"></div>
                        <p className="specialists__logo__desc">Психотеропевт</p>
                    </div>
                    <div className="specialists__name">
                        <p>Елизавета Сергеевна</p>
                    </div>
                    <div className="specialists__description">
                        <p className="specialists__description__experience">Опыт работы: 25 лет</p>
                        <p className="specialists__description__study">
                            Окончила Ярославский медицинский университет.
                                        </p>
                        <p className="specialists__description__text">
                            Работала в поликлинике №2. Врачом стать мечтала, эта профессия нравится потому, что она нужна людям. После работы много гуляю пешком и занимаюсь спортом – врач должен быть в форме.
                                        </p>
                    </div>
                </div>
                <div className="carousel__item">
                    <div className="specialists__logo">
                        <div className="specialists__logo__img"></div>
                        <p className="specialists__logo__desc">Психотеропевт</p>
                    </div>
                    <div className="specialists__name">
                        <p>Елизавета Сергеевна</p>
                    </div>
                    <div className="specialists__description">
                        <p className="specialists__description__experience">Опыт работы: 25 лет</p>
                        <p className="specialists__description__study">
                            Окончила Ярославский медицинский университет.
                                        </p>
                        <p className="specialists__description__text">
                            Работала в поликлинике №2. Врачом стать мечтала, эта профессия нравится потому, что она нужна людям. После работы много гуляю пешком и занимаюсь спортом – врач должен быть в форме.
                    </p>
                    </div>
                </div>
            </Slider>
        );
    }
}

