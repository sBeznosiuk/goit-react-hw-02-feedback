import React, { Component } from 'react'

class Feedback extends Component {

    handleGood = () => {
      console.log(1)
    }

    handleNeutral = () => {
        console.log(2)
    }

    handleBad = () => {
        console.log(3)
    }

    render() {
        return (
        <div>
            <h2>Please leave feedback</h2>
            <ul>
                <li><button onClick={this.handleGood}>Good</button></li>
                <li><button onClick={this.handleNeutral}>Neutral</button></li>
                <li><button onClick={this.handleBad}>Bad</button></li>
            </ul>
        </div>
        )
    }
}

export default Feedback