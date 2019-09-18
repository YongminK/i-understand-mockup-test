import React from 'react';
import '../../style/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer__nav'>
                    <nav className='nav'>
                        <ul className="nav__list--footer">
                            <li className="nav__item"><a href="" className="nav__link nav__link--footer"> Услуги</a></li>
                            <li className="nav__item"><a href="" className="nav__link nav__link--footer">О нас</a></li>
                            <li className="nav__item"><a href="" className="nav__link nav__link--footer">Блог</a></li>
                            <li className="nav__item"><a href="" className="nav__link nav__link--footer">Вопросы</a></li>
                            <li className="nav__item"><a href="" className="nav__link nav__link--footer">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='contact'>
                    <ul className="contact__list">
                        <li className="contact__item"><a href="" className="contact__link contact__link--fb"></a></li>
                        <li className="contact__item"><a href="" className="contact__link contact__link--vk"></a></li>
                        <li className="contact__item"><a href="" className="contact__link contact__link--insta"></a></li>
                    </ul>
                </div>
                <div className='footer__payment'>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="" className="nav__link nav__link--yadengi"></a></li>
                        <li className="nav__item"><a href="" className="nav__link nav__link--visa"></a></li>
                        <li className="nav__item"><a href="" className="nav__link nav__link--master"></a></li>
                    </ul>
                </div>
                <div className='footer__developby'>
                    <span className="developby__text">Разработано</span>
                    <div className="developby__logo"></div>
                </div>
                <div className='footer__copyright'>
                    <p className='footer__copyright__text'>© 2017, ООО «Международный Психологический Центр» </p>
                    <p className='footer__copyright__text'>Конфидициальность</p>
                </div>
            </footer>
        )
    }
}

export default Footer;