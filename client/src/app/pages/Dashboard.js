import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { Card } from '../components/Card/Card.js'
import { Addbutton } from '../components/AddButton/Addbutton'

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      data: []
      // gameDate: [],
      // gameLink: [],
      // teamA: [],
      // teamB: [],
      // teamAImg: [],
      // teamBImg: [],
      // teamAImpOdds: [],
      // teamBImpOdds: [],
      // teamACalcOdds: [],
      // teamBCalcOdds: [],
      // betTeam: [],
      // betSize: [],
      // teamAScore: [],
      // teamBScore: []
    }
  }

  componentDidMount() {
    axios.get(`/api/match`)
      .then(res => {
        console.log(res)
        var data = res.data
        this.setState({
          data: data.slice(0, data.length)
        })
        // var gameDate = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   gameDate.push(JSON.stringify(data[i].gameDate).split('"').join(''))
        // }
        // this.setState({ gameDate});

        // var gameLink = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   gameLink.push(JSON.stringify(data[i].gameLink).split('"').join(''))
        // }
        // this.setState({ gameDate});

        // var teamA = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamA.push(JSON.stringify(data[i].teamA).split('"').join(''))
        // }
        // this.setState({ teamA });

        // var teamB = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamB.push(JSON.stringify(data[i].teamB).split('"').join(''))
        // }
        // this.setState({ teamB });

        // var teamAImg = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamAImg.push(JSON.stringify(data[i].teamA).split('"').join(''))
        // }
        // this.setState({ teamAImg });

        // var teamBImg = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamBImg.push(JSON.stringify(data[i].teamB).split('"').join(''))
        // }
        // this.setState({ teamBImg });

        // var teamAOdds = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamAOdds.push(JSON.stringify(data[i].teamAOdds).split('"').join(''))
        // }
        // this.setState({ teamAOdds });

        // var teamBOdds = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamBOdds.push(JSON.stringify(data[i].teamBOdds).split('"').join(''))
        // }
        // this.setState({ teamBOdds });

        // var teamAImpOdds = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamAImpOdds.push(JSON.stringify(data[i].teamAImpOdds.toFixed(2)).split('"').join(''))
        // }
        // this.setState({ teamAImpOdds });

        // var teamBImpOdds = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamBImpOdds.push(JSON.stringify(data[i].teamBImpOdds.toFixed(2)).split('"').join(''))
        // }
        // this.setState({ teamBImpOdds });

        // var teamACalcOdds = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamACalcOdds.push(JSON.stringify(data[i].teamACalcOdds.toFixed(2)).split('"').join(''))
        // }
        // this.setState({ teamACalcOdds });

        // var teamBCalcOdds = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   teamBCalcOdds.push(JSON.stringify(data[i].teamBCalcOdds.toFixed(2)).split('"').join(''))
        // }
        // this.setState({ teamBCalcOdds });

        // var betTeam = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   betTeam.push(JSON.stringify(data[i].betTeam).split('"').join(''))
        // }
        // this.setState({ betTeam });

        // var betSize = [];
        // for( let i=(data.length-1); i>-1; i--){
        //   betSize.push(JSON.stringify(data[i].betSize).split('"').join(''))
        // }
        // this.setState({ betSize });

      });

  }


  render() {
    // const { gameDate } = this.state;
    // const { gameLink } = this.state;
    // const { teamA } = this.state;
    // const { teamB } = this.state;
    // const { teamAImg } = this.state;
    // const { teamBImg } = this.state;
    // const { teamAOdds } = this.state;
    // const { teamBOdds } = this.state;
    // const { teamAImpOdds } = this.state;
    // const { teamBImpOdds } = this.state;
    // const { teamACalcOdds } = this.state;
    // const { teamBCalcOdds } = this.state;
    // const { betTeam } = this.state;
    // const { betSize } = this.state;

    return (
      <div className="App">
        <div className="row">
        <div className="col s1 m1"></div>
        <div className="col s2 m2"><Addbutton></Addbutton></div>
        <div className="col s1 m1"></div>
          <div className="col s7 m7">
            {this.state.data.slice(0).reverse().map(item => <Card
              id={item.id}
              gameDate={new Date(parseInt(item.gameDate)).toString()} gameLink={item.gameLink}
              teamA={item.teamA} teamB={item.teamB}
              teamAImg={item.teamAImg} teamBImg={item.teamBImg}
              teamAFlag={item.teamAFlag} teamBFlag={item.teamBFlag}
              teamAOdds={item.teamAOdds} teamBOdds={item.teamBOdds}
              teamAImpOdds={item.teamAImpOdds} teamBImpOdds={item.teamBImpOdds}
              teamACalcOdds={item.teamACalcOdds} teamBCalcOdds={item.teamBCalcOdds}
              betTeam={item.betTeam} betSize={item.betSize}
            ></Card>)}
          </div>
          <div className="col s1 m1"></div>
        </div>
      </div>
    );
  }
}

export default List;