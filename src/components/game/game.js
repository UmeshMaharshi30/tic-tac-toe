import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from './player';
import Board from './../board/board'

class Game extends Component {

    componentDidMount() {
    }

    render() {
        return (<div className="container-fluid">
            <nav className="navbar navbar-light bg-primary text-light">
            Welcome to Tic Tac Toe !
            </nav>
            <div className="row">
            <Player player={this.props.player1}></Player>
            <Board></Board>
            <Player player={this.props.player2}></Player>
            </div>
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