import React, { Component } from 'react';

class Rented extends Component {
    render() {
        return (
            <div>
                <div>Your Rents</div>
                <div>{this.props.movie.title}</div>
            </div>
        );
    }
}

export default Rented;