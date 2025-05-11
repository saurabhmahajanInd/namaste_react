import React, { Component } from 'react'

export default class UserClass extends Component {

    constructor(props) {
        super(props);
        // creating state 
        this.state = {
            counter: 0 ,
            nameAnother: 'tester'
        }
        console.log(this.props.name + ' constructor');
    }
  
    componentDidMount() {
        console.log(this.props.name + ' Component Did Mount');
    }

    componentDidUpdate() {
        console.log(this.props.name + ' Component Did Update update');
    }

    render() {
         const {name, age, location} = this.props;
         const {nameAnother, counter} = this.state;
         console.log(this.props.name + ' Render Method');

         return (
            <>
                <div>Name : {name + ', '+ age}</div>
                <div>Location : {location}</div>
                <div>{nameAnother + ' ' + counter}</div>
                <button onClick={() => {
                    // updating state
                    this.setState({
                        nameAnother: this.state.nameAnother + ' upadted',
                    })
                }}>Click Me</button>
            </>
        )
    }
}
