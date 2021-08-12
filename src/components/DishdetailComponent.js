import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class Dishdetail extends Component {
  starIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="12"
        fill="currentColor"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }

  renderDish(dish) {
    if (dish == null) {
      return <div></div>;
    }
    return (
      <div className="col-sm col-md-5 mt-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments == null) {
      return <div></div>;
    }
    return (
      <div className="col-sm col-md-5 mt-1">
        <h2>Comments</h2>
        {comments.map((comment) => {
          return (
            <div>
              <ul className="list-unstyled">
                <li>
                  ({this.starIcon()}
                  {comment.rating}){comment.comment}
                </li>
                <li>
                  -- {comment.author} , {comment.date}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    const dish = this.props.dish;
    const comments = this.props.dish.comments;
    console.log(comments);
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(dish)}
          {this.renderComments(comments)}
        </div>
      </div>
    );
  }
}
export default Dishdetail;
