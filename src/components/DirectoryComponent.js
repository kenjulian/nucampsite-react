import React, {Component} from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
            // campsites: [
            //     {
            //         id: 0,
            //         name: 'React Lake Campground',
            //         image: 'assets/images/react-lake.jpg',
            //         elevation: 1233,
            //         description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
            //     },
            //     {
            //       id: 1,
            //       name: 'Chrome River Campground ',
            //       image: 'assets/images/chrome-river.jpg',
            //       elevation: 877,
            //       description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
            //     },
            //     {
            //         id: 2,
            //         name: 'Breadcrumb Trail Campground',
            //         image: 'assets/images/breadcrumb-trail.jpg',
            //         elevation: 2901,
            //         description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
            //     },
            //     {
            //         id: 3,
            //         name: 'Redux Woods Campground',
            //         image: 'assets/images/redux-woods.jpg',
            //         elevation: 42,
            //         description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
            //     }
            // ]
        };   
    }

        
        onCampsiteSelect(campsite) {
            //this method changes the value of the state (selectedCampsite property)
            this.setState({selectedCampsite: campsite});
            //prevents having to directly change state: this.state.selectedCampsite = campsite
        }

        // renderSelectedCampsite(campsite) {
        //     //will either render a campsite; else, it'll render nothing(empty div)
        //     if (campsite) {
        //         return (
        //             <Card>
        //                 <CardImg top src={campsite.image} alt={campsite.name} />
        //                 <CardBody>
        //                     <CardTitle>{campsite.name}</CardTitle>
        //                     <CardText>{campsite.description}</CardText>

        //                 </CardBody>
        //             </Card>
        //         )
        //     }

        //     return <div />
        // }

    render() {
        //changed this.state.campsites to this.props.campsites bc it no longer has state data but data is being passed down from parent component(App)
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    {/* campsite from props */}
                    {/* this is set up so that when a card is clicked, the campsite gets set as selectedCampsite in the local state */}

                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>

                        </CardImgOverlay>
                        

                    </Card>
                    
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>

                <CampsiteInfo campsite={this.state.selectedCampsite} />

                {/* <div className='row'>
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div> */}
            </div>
        );
    }

}



export default Directory;