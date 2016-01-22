import Marked from 'marked'
import React from 'react'

export default class Comment extends React.Component {
  render() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true})
    return (
      <div calssName='Comment panel panel-primary'>
        <div className='panel-heading commentAuthor'>
          {this.props.author}
        </div>
        <div className='panel-body'>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
      </div>
    );
  }
}
