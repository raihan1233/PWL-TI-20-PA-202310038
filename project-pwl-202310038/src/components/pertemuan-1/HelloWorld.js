import React, { Component } from 'react'

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.CountTimer = this.CountTimer.bind(this);
        this.state = {
            today: new Date(),
            myname: "Febry D F"
        };
    }
    CountTimer() {
        this.setState({
            today: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.CountTimer(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h1>Today is {this.state.today.toTimeString()}</h1>
                <h2>My Name is {this.state.myname}</h2>
            </div>
        )
    }
}
