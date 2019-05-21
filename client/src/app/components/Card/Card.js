import React from 'react';
import './Card.css';

export class Card extends React.Component {
    render() {
        if(this.props.render === false) return null;
        return (
            <div className="row idvitem">
                <div className="col s5 m5">
                    <h2 className="header">{this.props.teamA} vs {this.props.teamB}</h2>
                    <div className="card">
                    <div className="row">
                            <div className="col s2 m2">
                                <img alt="teamA" src="https://static.hltv.org/images/team/logo/4608"></img>
                            </div>
                            <div className="col s4 m4">
                                <p>{this.props.teamA}'s Chance to win</p>
                                <p>{this.props.teamACalcOdds}%</p>
                                <p>{this.props.teamA}'s Odds </p>
                                <p>{this.props.teamAImpOdds}%</p>                              
                            </div>
                            <div className="col s4 m4">
                            <p>{this.props.teamB}'s Chance to win</p>
                                <p>{this.props.teamBCalcOdds}%</p>
                                <p>{this.props.teamB}'s Odds </p>
                                <p>{this.props.teamBImpOdds}%</p> 
                            </div>
                            <div className="col s2 m2">
                                <img alt="teamA" src="https://static.hltv.org/images/team/logo/4608"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}