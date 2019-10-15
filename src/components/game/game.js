import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from './player';
import Board from './../board/board'

class Game extends Component {

    componentDidMount() {
    }

    render() {
        return (<div className="container">
            <div className="row">
            <div className="col-12">Welcome to Tic Tac Toe !</div>
            <Player player={this.props.player1}></Player>
            <Player player={this.props.player2}></Player>
            </div>
            <Board></Board>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        "player1" : state.playersInformation.player1,
        "player2" : state.playersInformation.player2,
    }
}


export default connect(mapStateToProps)(Game);