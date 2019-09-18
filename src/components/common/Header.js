import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className="header">
        <div className="header__left">
            <div className="header__logo"></div>
            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="" className="nav__link nav__link--border nav__linl--active">
                            Частным лицам
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link nav__link--left">
                            Бизнесу
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div  className="header__right">
            <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Услуги</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">О нас</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Блог</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Вопросы</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
                    </ul>
                </nav>
                <div className='question-button'>
                    <a className="button__green">Задать вопрос</a>
                </div>
            </div>        
    </header>
        )
    }
}

export default Header;