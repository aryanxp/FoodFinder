/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from "reactstrap";
import { Link } from "react-router-dom";
import star from '../logo.svg'
import { Control, Errors, LocalForm } from "react-redux-form";

const minLength = (len) => (val) => val && (val.length >= len)
const maxLength = (len) => (val) => !(val) || (val.length <= len)

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isModalOpen: false
    }
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmit(values) {
    this.toggleModal()
    console.log('Current state is:' + JSON.stringify(values));
    alert('Current state is:' + JSON.stringify(values));
  }
  render() {
    return (
      <div>
        <div>
          <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="Rating" >Rating</Label>
                <Col>
                  <Control.select model=".rating" name="rating" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group" >
                <Label htmlFor="your name" >Your Name</Label>
                <Col>
                  <Control.text model=".name" name="your name" className="form-control" placeholder="Your Name"
                    validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                    }}>
                  </Control.text>
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }} />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Col>
                  <Control.textarea model=".comment" name="comment" className="form-control"
                    rows="6">
                  </Control.textarea>
                </Col>
              </Row>
              <Row className="form-group">
                <Col >
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }

}

function RenderDish({ dish }) {
  return (
    <div className="col-sm col-md-5 m-1">
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
function RenderComments({ comments }) {
  return (
    <div className="col">
      <h2>Comments</h2>
      {comments.map((comment) => {
        return (
          <ul className="list-unstyled">
            <li>
              (<img src={star} alt="" />
              {comment.rating}){comment.comment}
            </li>
            <li>
              -- {comment.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        );
      })}
      <CommentForm />
    </div>
  );
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
