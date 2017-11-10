import React, {Component} from 'react';
import CommentList from './CommentList';

function Article({article, isOpen, toggleOpen}) {
	return (
		<div>
			<h3>{article.title}</h3>
			<button onClick={toggleOpen}>
				{isOpen ? 'close' : 'open'}
			</button>
			{getBody({article, isOpen})}
		</div>
	)
}

function getBody({article, isOpen}) {
	if (!isOpen)return null
	return <section>
		{article.text}
		<CommentList comments={article.comments}/>
	</section>
}

export default Article
/*
 export default function Article(props) {
 const{article} = props
 return (
 <div>
 <h3>{article.title}</h3>
 <section>{article.text}</section>
 </div>
 )
 }*/
