import React from 'react';
import axios from 'axios';  
import './Card.css';



export class Card extends React.Component {
    constructor() {
        super();
    
        this.state = {
            appClass: 'myClass'
        };
    }

    componentDidMount() {
        this.setState({ appClass: 'scale-in' });
    }

    handleClick(e) {
            e.preventDefault();
            console.log(this.props.id);
            axios.delete(`/api/match/`+ this.props.id)
            .then(res => {
            window.location.reload();
        })
    }

    render() {
        return (
            <div className="csgocontainer">
                <h2 className="header">{this.props.teamA} vs {this.props.teamB} <i className="fas fa-window-close" onClick={this.handleClick.bind(this)}></i></h2>
                <div className="radius">
                <div className="card blue-grey darken-1 z-depth-5">
                    <div className="row csgocard">
                        <div className="col s2 m2">
                            <div className="imgcontainer">
                                <img className="flag1" alt="teamAFlag" src={this.props.teamAFlag}></img>
                                <img className="logo1" alt="teamA" src={this.props.teamAImg}></img>
                            </div>
                        </div>
                        <div className="col s3 m3">
                            <p>{this.props.teamA}'s Chance to win</p>
                            <p>{this.props.teamACalcOdds}%</p>
                            <p>{this.props.teamA}'s Odds </p>
                            <p>{this.props.teamAImpOdds}%</p>
                        </div>
                        <div className="col s2 m2">
                            <p>{this.props.gameDate}</p>
                            <p>Bet {this.props.betSize}% of your bankroll on Team {this.props.betTeam}</p>
                        </div>
                        <div className="col s3 m3">
                            <p>{this.props.teamB}'s Chance to win</p>
                            <p>{this.props.teamBCalcOdds}%</p>
                            <p>{this.props.teamB}'s Odds </p>
                            <p>{this.props.teamBImpOdds}%</p>
                        </div>
                        <div className="col s2 m2">
                            <div className="imgcontainer">
                                <img className="logo2" alt="teamA" src={this.props.teamBImg}></img>
                                <img className="flag2" alt="teamBFlag" src={this.props.teamBFlag}></img>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}