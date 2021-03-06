import React from 'react';
import { ListContext } from '../list_context'; 

class AddToDoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            details: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange({ target: { name, value }}) {
        // Since we don't know which one is changing now, use [] for dynamic key name
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Create a new object with {} and spread the properties in state to this new object
        this.context.addItem({ ...this.state });
        this.reset();
    }

    reset() {
        this.setState({
            title: '',
            details: ''
        });
    }

    render() {
        const { details, title } = this.state;
        console.log('Form context: ', this.context);
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" value={title} name="title" onChange={this.handleChange} type="text" id="title"/>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input className="form-control" value={details} name="details" onChange={this.handleChange} type="text" id="description" />
                </div>

                <div className="text-right">
                    <button className="btn btn-outline-success mr-2">Add To Do</button>
                    <button className="btn btn-outline-danger" onClick={this.reset} type="button">Reset</button>
                </div>
            </form>
        );
    }
}

AddToDoForm.contextType = ListContext;

export default AddToDoForm;