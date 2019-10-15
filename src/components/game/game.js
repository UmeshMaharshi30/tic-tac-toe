import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from './player';
import Board from './../board/board'
import {user_actions, game_actions} from './../../actions/'

class Game extends Component {

    render() {
        function checkGameEnd(grid) {
            for(var i = 0; i < grid.length;i++) {                
                var row_strike = true;
                for(var j = 1; j < grid[0].length;j++) {
                    if(grid[i][j] === '_') {
                        row_strike = false;
                        continue;
                    }
                    if(grid[i][j] !== grid[i][j - 1]) {
                        row_strike = false;
                    }
                }
                if(row_strike) return true;
            }
            for(i = 0; i < grid.length;i++) {                
                row_strike = true;
                for(j = 1; j < grid[0].length;j++) {
                    if(grid[j][i] === '_') {
                        row_strike = false;
                        continue;
                    }
                    if(grid[j - 1][i] !== grid[j][i]) {
                        row_strike = false;
                    }
                }
                if(row_strike) return true;
            }
            for(i = 1; i < grid.length;i++) {                
                if(grid[i][i] === '_' || (grid[i - 1][i - 1] !== grid[i][i] && grid[i - 1][i - 1] !== '_')) return false;
            }
            return true;
        }
        var game_settings = this.props.gameState;
        var changePlayerTurn = this.props.changePlayerTurn;
        var changeGridValue = this.props.changeGridValue;
        var alphabet = this.props.playersInformation.player1.turn ? this.props.playersInformation.player1.alphabet : this.props.playersInformation.player2.alphabet;
        var game_ended = this.props.playersInformation.player1.victory || this.props.playersInformation.player2.victory;
        var board_properties = {game_settings, changePlayerTurn, changeGridValue, val : alphabet, game_ended : game_ended};
        
        var game_end = checkGameEnd(this.props.gameState) && !this.props.playersInformation.player1.victory && !this.props.playersInformation.player2.victory;
        if(game_end) this.props.onGameEnd();
        var victors_name = "";
        if(this.props.playersInformation.player1.victory) victors_name = this.props.playersInformation.player1.name;
        if(this.props.playersInformation.player2.victory) victors_name = this.props.playersInformation.player2.name;
        return (<div className="container-fluid">
            <nav className="navbar navbar-light bg-primary text-light">
            Welcome to Tic Tac Toe !
            </nav>
            <div className="row text-center">
            <Player player={this.props.playersInformation.player1}></Player>
            <Board board={board_properties}></Board>
            <Player player={this.props.playersInformation.player2}></Player>
            <div className="col-12">{(this.props.playersInformation.player1.victory || this.props.playersInformation.player2.victory) && <div className="col-3 p-1 mb-1 bg-success text-white justify-content-center d-inline">Congrats {victors_name} !</div>}</div>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
      onGameEnd:() => {
        dispatch(user_actions.endGame())
      },
      changePlayerTurn:() => {
          dispatch(user_actions.changePlayerTurn())
      },
      changeGridValue:(r,c,val) => {
          dispatch(game_actions.changeGridValue(r,c,val))
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Game);