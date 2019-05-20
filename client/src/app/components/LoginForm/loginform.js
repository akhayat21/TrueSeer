import React from "react";
import { Link } from 'react-router-dom';

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }




    render() {
        return (
          <form>
             <label>
              Username:
              <input
                name="Email"
                type="text"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label> 
            <br />
            <label>
              Password:
              <input
                name="Password"
                type="password"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
            <br></br>
            <Link to={'./Dashboard'}>
      <button className="waves-effect waves-#ff9800 green btn-small" >Get Started  <i className="fas fa-play-circle"></i></button>
      </Link>
          </form>
        );
      }
}