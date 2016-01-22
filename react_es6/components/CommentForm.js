import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) return;
    // propsを使ってonCommentSubmitに設定
    this.props.onCommentSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
  }

  render() {
    return (
      // this.handleSubmit.bind(this)で関数内のthisを固定
      <form className="commentForm form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="checkbox-inline" placeholder="名前" ref="author" />
          <input type="text" className="checkbox-inline" placeholder="コメント" ref="text" />
          <input type="submit" className="btn btn-default checkbox-inline" value="投稿" />
        </div>
      </form>
    )
  }
}
