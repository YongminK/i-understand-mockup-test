import React from 'react';

class Situation extends React.Component{
    render(){
        return(
            <section className="situation">
                <div className="situation__when">
                    <p className="when__text">В каких ситуациях можно обратиться к нам</p>
                </div>
                <div className="situation__choose">
                    <ul className="nav__list">
                        <li className="nav__item">Кризис</li>
                        <li className="nav__item nav__item--active">Семья</li>
                        <li className="nav__item">Дети</li>
                        <li className="nav__item">Коммуникации</li>
                        <li className="nav__item">Мужчина и женщина</li>
                        <li className="nav__item">Развитие</li>
                    </ul>
                </div>
                <div className="situation__description">
                    <div className="description__logo"></div>
                    <div className='description__desc'>
                        <div className="description__text">
                            <p>
                                Поможем в поиске путей разрешения бытового семейного конфликта,
                                найти и устранить причины конфликтов. сгладить проблемы поколений.
                                Поможем восстановить целостность семьи.
                            </p>
                        </div>
                        <div className="description__tags">
                            <ul className="description__tags__list">
                                <li className="description__tags__item">Переживание потери близких</li>
                                <li className="description__tags__item">Стресс, Апатия, Тревоги</li>
                                <li className="description__tags__item">Страхи, Проблемы здоровья</li>
                                <li className="description__tags__item">Кризисы возраста</li>
                                <li className="description__tags__item">Зависимости и вредные привычки</li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </section>
        )
    }
}

export default Situation;