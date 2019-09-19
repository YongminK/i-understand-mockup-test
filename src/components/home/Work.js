import React from 'react';

class Work extends React.Component{
    render(){
        return(
            <section className="work">
                <div className="work__how">
                    <p className="how__text">
                        Как мы работаем
                    </p>
                </div>
                <div className="work__block">
                    <div className="work__block__img work__block__img--1"></div>
                    <div className="work__block__text">
                        <h3 className="work__block__head">Удобно</h3>
                        <div className="work__block__desc">
                            <p>
                                Мы оказываем преимущественно дистанционные консультации – по телефону или через skype. Такой вид консультаций по своей результативности является ничем не хуже очной. Кроме того, вы экономите время на дорогу и не заботитесь о том, как вы выглядите и вообще можете находиться, где угодно. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work__block">
                <div className="work__block__img work__block__img--2"></div>
                    <div className="work__block__text">
                        <h3 className="work__block__head">Эффективно</h3>
                        <div className="work__block__desc">
                            <p>
                                Мы не обещаем чуда, но предлагаем увидеть жизненные альтернативы и научиться их реализовывать. В отличие от телефона доверия, где коммуникаций носит разовый характер и направлена на разрешение кризиса сиюминутно, мы готовы «вести» человека, пройти с ним вместе сложный жизненный этап или переосмыслить ситуацию в поисках того пути, которые наиболее ему подходит.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work__block">
                <div className="work__block__img work__block__img--3"></div>
                    <div className="work__block__text">
                        <h3 className="work__block__head">Конфиденциально</h3>
                        <div className="work__block__desc">
                            <p>
                                Многие люди уже получили помощь у нас. Иногда мы приводим примеры реальных случаев потому, что многие могут себя в них узнать, примерить на себя и ознакомиться с ценными наблюдениями психологов. Однако основная индивидуальная работа начнется при личном обращении. Мы позаботимся о том, чтобы все осталось строго между нами.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work__block">
                <div className="work__block__img work__block__img--4"></div>
                    <div className="work__block__text">
                        <h3 className="work__block__head">С пониманием</h3>
                        <div className="work__block__desc">
                            <p>
                                Мы не считаем потребность в помощи слабостью или изъяном. Если мы и оцениваем обращение человека за помощью, то скорее как естественный шаг, говорящий о его готовности к переменам и развитию.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;