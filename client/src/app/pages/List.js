import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      games: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    axios.get(`/api/matches`)
      .then(res => {
        const games = res[0];
        this.setState({ games });
      });
  }

  // Retrieves the list of items from the Express app
  

  render() {
    const { games } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {games}
      </div>
    );
  }
}

export default List;