import React from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';


//Validators: will be used via the validator attribute in the <Control.text> for the author field

//accepts a string value from the form inputs
//checks that theres an input value in each field via is it null/undefined AND does it have a length
//returns true if theres a value, else false
const required = val => val && val.length;

//requires wrapping a function(callback) inside a function(higher order)
//higher order function takes the max length(len) from LocalForm input
        //len will be passed in as a number when it's called; it represents what the max characters should be
//cb func takes in string value(val) from LocalForm input
const maxLength = len => val => !val || (val.length <= len);

//len will be passed in as a number when minLength is called; it represents what the min characters should be
const minLength = len => val => val && (val.length >= len);

const isNumber = val => !isNaN(+val );

function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                        <CardImgOverlay>
                            <CardText>{campsite.description}</CardText>
                        </CardImgOverlay>
                        </CardBody>
                </Card>
            </div>
        )
    }

function RenderComments({comments}) {
        if (comments) {
            return (
                <>
                
                    <div className="col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments.map(comment => {
                            return (
                                <>
                                    <h5>{comment.text}</h5>
                                    <h6>--{comment.author} {""} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
    </h6>
                                </>
                            )
                        })}
                    </div>
                    <CommentForm />
                </>
            )
        }
        //if (!comment) return an empty div
                    return <div></div>
    }

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.campsite.name}</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderCampsite campsite={props.campsite} />
                <RenderComments comments={props.comments} />
            </div>
        </div>
    );
     }
    }

    class CommentForm extends React.Component {
        constructor(props) {
            super(props)
            this.state={
                openModal: false
            };

            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                openModal: !this.state.openModal
            });
        }

        //onSubmit, refers to input values in the LocalForm(the control elements)
        handleSubmit(values) {
            //console.log(values)
            console.log("Current state is: " + JSON.stringify(values));
             alert("Current state is: " + JSON.stringify(values));

        }

        render() {
            return (
                <>
                    <Button outline onClick={this.toggleModal}><i className="fa fa-lg fa-pencil" />Submit Comment</Button>

                    <Modal isOpen={this.state.openModal} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <div className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select defaultValue={1} className="form-control" model=".rating" id="rating" name="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="author">Author</Label>
                                    <Control.text 
                                    className="form-control" 
                                    model=".author" 
                                    id="author" 
                                    name="author"
                                    /* give validator a value of an object containing the validation functions declared up top */
                                    validators={{
                                        required,
                                        maxLength: maxLength(15),
                                        minLength: minLength(2)
                                    }} />
                                    <Errors 
                                        className="text-danger"
                                        // this is to match the model of the corresponding <Control.text>
                                        model=".author"
                                        // built in function, cause form field to show messages if its touched by the user
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be at least 2 characters",
                                            maxLength: "Must be at max 15 characters"
                                        }}/>

                                </div>
                                <div className="form-group">
                                    <Label htmlFor="text">Text</Label>
                                    <Control.textarea className="form-control" model=".text" id="text" name="text" />
                                </div>

                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </>
            )
        }
    }


export default CampsiteInfo;