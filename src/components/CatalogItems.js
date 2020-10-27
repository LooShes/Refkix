import React, { Component } from 'react';
import rent from '../pics/rent.PNG'
import Rented from './Rented'
import ReactDOM from 'react-dom';

class CatalogItems extends Component {
    constructor(){
        super()
        this.test = this.updateRent.bind(this)
    }

    updateRent = () => {
        this.props.updateRent(this.props.movie.title)
        ReactDOM.render(
            <Rented  movies={this.props.movie} />,
            document.getElementById('pop'))
    }

    render() {
        return (
            <div style={{display:"inline-block", margin:"30px"}}>
                <div style={{marginRight:"70px"}}>{this.props.movie.title}</div>
                <div style={{marginRight:"70px"}}>{this.props.movie.year}</div>
                <img src={this.props.movie.img} alt="movie" style={{maxBlockSize: "300px"}}/>
                <img src={rent} alt="rent-icon" style={{height:"100px"}} onClick={this.updateRent} />
            </div>
        );
    }
}

export default CatalogItems;