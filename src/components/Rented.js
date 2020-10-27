import React, { Component } from 'react';

class Rented extends Component {
    divStyle = {
        height: "200px",
        width: "500px",
        backgroundColor: "white",
        display: "flex"
    }

    render() {
        return (
            <div>
                <div style={this.divStyle}>
                    {this.props.movies.isRented ?
                    <div style={{flex: 1, flexDirection: 'row'}}>
                        <span style={{color:"red", float:"left", width:"250px", textAlign:"left"}}>Rents</span>
                        <span style={{color:"red", float:"right", width:"250px", textAlign:"right"}}>Close</span>
                        <span style={{color:"red", float:"left", width:"250px"}}>{this.props.movies.title}</span>
                        <span style={{color:"red", float:"right", width:"250px"}}>un-rent</span>
                    </div>: false}
                </div>)
           </div>
        );
    }
}

export default Rented;