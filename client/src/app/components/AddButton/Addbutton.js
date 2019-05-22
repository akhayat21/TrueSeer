import React from 'react';
import axios from 'axios';
import './Addbutton.css';

export class Addbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
            axios.post(`/api/match/`,{
                url: this.state.value
            })
            .then(()=> {
            window.location.reload();
        })
    }

    render() {
        return (
            <div className="addbutton">
                <form onSubmit={this.handleSubmit}>
                    <label className="title">
                        Game Link:
                        <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}