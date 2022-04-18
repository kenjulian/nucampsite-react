import React from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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


export default CampsiteInfo;