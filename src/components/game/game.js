import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from './player';
import Board from './../board/board'

class Game extends Component {

    componentDidMount() {
    }

    render() {
        var victors_name = this.props.player1.victory ? this.props.player1.name : this.props.player2.name;
        return (<div className="container-fluid">
            <nav className="navbar navbar-light bg-primary text-light">
            Welcome to Tic Tac Toe !
            </nav>
            <div className="row text-center">
            <Player player={this.props.player1}></Player>
            <Board></Board>
            <Player player={this.props.player2}></Player>
            <div className="col-12">{(this.props.player1.victory || this.props.player2.victory) && <div className="col-3 p-1 mb-1 bg-success text-white justify-content-center d-inline">Congrats {victors_name} !</div>}</div>
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