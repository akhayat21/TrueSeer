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
            <div className="addbutton">
                <form onSubmit={this.handleSubmit}>
                    <label className="title">
                        Game Link:
                        <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
            </div>
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            <div className="header instructions">
                    How to use TrueSeer  
                <i class="material-icons">help</i>
                <br></br>
                <div className="inst">

                    1)  Find a Link on HTLV.org to a match that you <br></br>would like to bet on
                    <br></br>
                    <br></br>
                    2)  Submit the link in the form above to add it <br></br>betting list
                    <br></br>
                    <br></br>
                    3)  A card will show up and provide information <br></br>
                    about the average odds bookkeepers offer, and <br></br>
                    TrueSeer will calculate the odds it thinks either <br></br>
                    team has and will provide you with the models <br></br>
                    recommended bet
                    <br></br>
                </div>
            </div>
            </div>
        );
    }
}