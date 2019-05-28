import React, { useState } from 'react';
import './Articles.scss';

import {articlesFeatured, articlesOther} from './../../../api/articles';

export default function Articles (){
    const [displayAllArticles, setDisplayAllArticles] = useState(false);

    function showOtherArticles(e){
        // e.target.scrollIntoView();
        e.target.remove();
        setDisplayAllArticles(true);
    }
    const articlesFeaturedList = articlesFeatured.map(article=>displayArticle(article));
    const articlesOtherList = articlesOther.map(article=>displayArticle(article));

    return(

        <section className="Articles">
            {articlesFeaturedList}
            <div className="btn" onClick={e=>showOtherArticles(e)}>More Press</div>
            {displayAllArticles && <div className="Articles_others">
                {articlesOtherList}
            </div>}
        </section>

    )
}
function displayArticle(article){
    const{cls, date, author, source, title, subtitle, text, img, link} = article;
    const bg = require('./../../../media/imgs/'+img.path);
    return (
        <article className={cls} key={cls}>
            <div className="article__img" style={{backgroundImage:"url("+bg+")"}}>
                <div className="article__img_caption">{img.caption}</div>
                <div className="cover"></div>
            </div>
            <div className="article__heading">
                <div className="article__top">
                    <div className="article__title font_themed">{title}</div>
                    <p>by <b>{author}</b> — Posted in <b>{source}</b>
                    {date && <span> on <b>{date}</b></span>}</p>
                </div>
                <p className="article__subtitle">{subtitle}</p>
                <div className="btn" onClick={e=>displayArticleText(e)}> Read more</div>
                <div className="article__arr">&#8595;</div>
            </div>
            <div className="article__body">
                {text}
                <p className="article__link">
                    <a href={link} target="_blank"  rel="noopener noreferrer">{source}'s original article available here.</a>
                    <br/>
                    <span onClick={e=>closeArticleText(e)}>&#10006; Close</span>
                </p>
            </div>
        </article>
    )

}
function displayArticleText(e){
    const article = e.target.closest('article');
    const articles = article.parentElement.parentElement.querySelectorAll('article');
    articles.forEach(a=>{
        a.classList.remove('open');
        if(a === article){
            article.classList.add('open');
            article.scrollIntoView();
        }
    })
}
function closeArticleText(e){
    const article = e.target.closest('article');
    article.classList.remove('open');
    // article.querySelector('.btn').style.display = 'block';
    article.scrollIntoView();
}
