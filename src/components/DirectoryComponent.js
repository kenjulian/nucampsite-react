import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

// renders each card w/ different campsite details
function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>

                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>

                </CardImgOverlay>                   

            </Link>
        </Card>
    )
}


function Directory(props) {
    
        //changed this.state.campsites to this.props.campsites bc it no longer has state data but data is being passed down from parent component(App)
        const directory = props.campsites.map(campsite => {
            
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    {/* props.onClick is from the onClick props that was passed in, an onClick event that fires onCampsiteSelect  */}
                    <RenderDirectoryItem campsite={campsite} />
                    
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }





export default Directory;