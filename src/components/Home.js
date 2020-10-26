import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    constructor(){
        super()
        this.state = [
        {
            user: "Lusy",
            color: this.generateRandomColor()
        },
        {
            user: "Ori",
            color: this.generateRandomColor()
        },
        {
            user: "Barnie",
            color: this.generateRandomColor()
        },
        {
            user: "Mikey",
            color: this.generateRandomColor()
        }]
    }
    generateRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <div>
                <p>WHO'S WATCHING?</p>
                <div className="user" style={{backgroundColor: this.state[0].color}}>{this.state[0].user}</div>
                <div className="user" style={{backgroundColor: this.state[1].color}}>{this.state[1].user}</div>
                <div className="user" style={{backgroundColor: this.state[2].color}}>{this.state[2].user}</div>
                <div className="user" style={{backgroundColor: this.state[3].color}}>{this.state[3].user}</div>
            </div>
        );
    }
}

export default Home;