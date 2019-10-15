import React, {Component} from 'react';

class Player extends Component {
    render() {
        var player = this.props.player;
        return (<div className="col-6">
            <div >Hello {player.name} !</div>
            <div>Your character : {player.alphabet}</div>
            {player.turn && <div>Your turn </div>}
            {!player.turn && <div>Opponent's turn </div>}
        </div>)
    }
}

export default Player;