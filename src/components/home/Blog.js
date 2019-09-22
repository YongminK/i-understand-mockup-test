import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <section className="blog">
                <div className='blog__top'>
                    <h3 className="blog__head">Блог</h3>
                    <p className="blog__all">Все статьи</p>
                </div>                
                <div className="blog__block">
                    <div className="blog__block__article">
                        <div className="article__img article__img--1"></div>
                        <div className="article__desc">
                            <div className="article__head">
                                <p>
                                    Итак, вы хотите принимать
                                    деньги
                                </p>
                            </div>
                            <div className="article__text">
                                <p>
                                    Как принимать платежи наличными,
                                    картой и в интернете. ФЗ-54 и не только
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog__block__article">
                        <div className="article__img article__img--2"></div>
                        <div className="article__desc">
                            <div className="article__head">
                                <p>
                                    Итак, вы хотите принимать
                                    деньги
                                </p>
                            </div>
                            <div className="article__text">
                                <p>
                                    Как принимать платежи наличными,
                                    картой и в интернете. ФЗ-54 и не только
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog;