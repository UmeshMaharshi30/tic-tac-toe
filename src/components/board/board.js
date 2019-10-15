import React, {Component} from 'react';
import { connect } from "react-redux";
import {game_actions, user_actions} from './../../actions';

class Board extends Component {

    render() {
        var matrix = this.props.currentState;
        var end_game = this.props.end;
        return (<div className="row col-8">
            <div className="col-12 row justify-content-center">{matrix.map((row, index) => {
                return <div key={index} className="col-12 justify-content-center row m-1">{row.map((r, index2) => { return <div key={index2} onClick={() => (!end_game && matrix[index][index2] !== this.props.val && matrix[index][index2] === '_') ? this.props.onGridClick(index, index2, this.props.val) : ""} className="col-2 text-center btn btn-primary">{r}</div> })}</div>;
            })}
            </div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {"currentState" : state.gameState, "val": state.playersInformation.player1.turn ? state.playersInformation.player2.alphabet : state.playersInformation.player1.alphabet, "end_game" : state.playersInformation.player1.victory || state.playersInformation.player2.victory};
}

const mapDispatchToProps = dispatch => {
    return {
      onGridClick: (r,c,val) => {        
        dispatch(game_actions.changeGridValue(r,c,val))
        dispatch(user_actions.changePlayerTurn())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Board);