import React from "react";

class Myclass extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: 'Praveen',
            lname: 'Aravind'
        }
    }

    render() {
        return (
            <>
                <div>
                    <h1>{this.state.fname}</h1>
                    <p>{this.state.lname}</p>
                </div>
            </>
        )
    }
}

export default Myclass;