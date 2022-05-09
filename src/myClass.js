import React from "react";

class Myclass extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            lname: ''
        };
    }

    updateState = () => {
        this.setState ({
            fname : 'praveen',
            lname : 'Aravind'
        });
    }

    render() {
        return (
            <>
                <div>
                    <h1>firstName : {this.state.fname}</h1>
                    <p>lastName : {this.state.lname}</p>
                    <button onClick={this.updateState}>click me!</button>
                </div>
            </>
        )
    }
}

export default Myclass;