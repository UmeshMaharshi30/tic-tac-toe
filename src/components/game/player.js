import React, {Component} from 'react';

class Player extends Component {
    render() {
        var player = this.props.player;
        return (<div className="col-2">
            <div >{player.name}</div>
            <div>Your character : {player.alphabet}</div>
            {player.turn && <div className="text-danger">Your turn </div>}
            {!player.turn && <div className="text-warning">Opponent's turn </div>}
        </div>)
    }
}

export default Player;