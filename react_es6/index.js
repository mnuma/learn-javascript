import React from 'react'
import ReactDom from 'react-dom'
import CommentBox from './components/CommentBox'

ReactDom.render(
  <CommentBox url="http://localhost:8080/comments.json" pollInterval={2000} />,
  document.getElementById('container')
);
