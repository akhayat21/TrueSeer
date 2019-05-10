import React from "react";
import Nav from 'react-bootstrap/Nav';
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
      alert('A name was submitted: ' + this.state.value);
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
            <Nav.Link href="dashboard" className="waves-effect waves-#ff9800 green btn-small" >Login</Nav.Link>
          </form>
        );
      }
}