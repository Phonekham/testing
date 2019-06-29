import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderComment() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Comment list</h4>
        <ul>{this.renderComment()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments }; //comments comes from reducers/index
}
export default connect(mapStateToProps)(CommentList);
