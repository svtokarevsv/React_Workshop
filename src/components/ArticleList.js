import React, {Component} from 'react'
import Article from './Article'
import AccordionWrapper from '../decorators/AccordionWrapper'

function ArticleList({articles,openItemId,toggleOpen}) {
	const ArticleElements = articles.map((article) => <li key={article.id}>
		<Article
			article={article}
			isOpen={article.id === openItemId}
			toggleOpen={toggleOpen(article.id)}
		/>
	</li>)
	return (
		<ul>
			{ArticleElements}
		</ul>
	)
}


export default AccordionWrapper(ArticleList)