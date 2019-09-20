import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <section className="blog">
                <h3 className="blog_head">Блог</h3>
                <p className="blog__all">Все статьи</p>
                <div className="blog__block">
                    <div className="blog__block__article">
                        <div className="article__img"></div>
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
                        <div className="article__img"></div>
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