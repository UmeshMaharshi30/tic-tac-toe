import React, {Component} from 'react';

class Player extends Component {
    render() {
        var player = this.props.player;
        return (<div className="col-2 font-weight-bold">
            <div className="text-capitalize">{player.name}</div>
            <div>Character : {player.alphabet}</div>
            {!player.turn && <div className="p-1 mb-1 bg-danger text-white">Your turn</div>}
            {player.turn && <div className="p-1 mb-1 bg-info text-white">Opponent's turn</div>}
        </div>)
    }
}

export default Player;