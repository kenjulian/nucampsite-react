import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
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
        //doesnt need to be wrapped w/ {} because it's not inside JSX
         return props.campsite ? (<div className='container'><div className="row"><RenderCampsite campsite={props.campsite} /> {" "}  <RenderComments comments={props.campsite.comments} /></div> </div>) : (<div></div>)
        
    }


export default CampsiteInfo;