import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'

class RobotForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            type: '',
            mass: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const newRobot = {
            name: this.state.name,
            type: this.state.type,
            mass: this.state.mass
        }
        this.store = new RobotStore()
        this.store.addRobot(newRobot)
        this.props.onAdd(newRobot)
        this.onAdd(event)
    }

    onAdd(event) {
      event.preventDefault()
      this.setState({ 
        name: '',
        type: '',
        mass: ''
      });
      console.log("Robot added!");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                </label>
                <br />
                <label>
                    Type:
                    <input type="text" name="type" onChange={this.handleChange} value={this.state.type} />
                </label>
                <br />
                <label>
                    Year Built:
                    <input type="text" name="mass" onChange={this.handleChange} value={this.state.mass} />
                </label>
                <br />
                <input type="submit" value="Submit" onClick={this.onAdd} />
            </form>
        )
    }
}
export default RobotForm