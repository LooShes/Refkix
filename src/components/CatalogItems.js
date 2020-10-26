import React, { Component } from 'react';
import rent from '../pics/rent.PNG'
import Rented from './Rented';
import Popup from "reactjs-popup";

class CatalogItems extends Component {
    updateRent = () => {
        this.props.updateRent(this.props.movie.title)
    }

    divStyle = {
        height: "500px",
        width: "500px",
        backgroundColor: "white"
    }

    render() {
        return (
            <div style={{display:"inline-block", margin:"30px"}}>
                <div style={{marginRight:"70px"}}>{this.props.movie.title}</div>
                <div style={{marginRight:"70px"}}>{this.props.movie.year}</div>
                <img src={this.props.movie.img} alt="movie" style={{maxBlockSize: "300px"}}/>
                <Popup trigger={<img src={rent} alt="rent-icon" style={{height:"100px"}} onClick={this.updateRent} />} modal>
                    <div style={this.divStyle}> Modal content </div>
                </Popup>
            </div>
        );
    }
}

export default CatalogItems;