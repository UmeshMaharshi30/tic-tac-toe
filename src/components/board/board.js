import React, {Component} from 'react';

class Board extends Component {

    render() {
        var board_properties = this.props.board;
        var matrix = board_properties.game_settings;
        var end_game = board_properties.game_ended;

        function onGridClick(r,c,val) {
            board_properties.changeGridValue(r,c,val);
            board_properties.changePlayerTurn();
        }
        
        return (<div className="row col-8">
            <div className="col-12 row justify-content-center">{matrix.map((row, index) => {
                return <div key={index} className="col-12 justify-content-center row m-1">{row.map((r, index2) => { return <div key={index2} onClick={() => (!end_game && matrix[index][index2] !== board_properties.val && matrix[index][index2] === '_') ? onGridClick(index, index2, board_properties.val) : ""} className="col-2 text-center btn btn-primary">{r}</div> })}</div>;
            })}
            </div>
        </div>)
    }
}

export default Board;