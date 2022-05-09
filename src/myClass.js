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
                    <h1 style={{color :'green'}}>firstName : {this.state.fname}</h1>
                    <p style={{color:'blue'}}>lastName : {this.state.lname}</p>
                    <button onClick={this.updateState}>click me!</button>
                </div>
            </>
        )
    }
}

export default Myclass;