import React, { Component } from 'react';
import rent from '../pics/rent.PNG'

class CatalogItems extends Component {
    updateRent = () => {
        this.props.updateRent(this.props.movie.title)
    }

    render() {
        return (
            <div style={{display:"inline-block", margin:"30px"}}>
                <div style={{marginRight:"70px"}}>{this.props.movie.title}</div>
                <div style={{marginRight:"70px"}}>{this.props.movie.year}</div>
                <img src={this.props.movie.img} alt="movie" style={{maxBlockSize: "300px"}}/>
                <img src={rent} alt="rent-icon" style={{height:"100px"}} onClick={this.updateRent}/>
            </div>
        );
    }
}

export default CatalogItems;