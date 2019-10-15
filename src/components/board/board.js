import React, {Component} from 'react';
import { connect } from "react-redux";

class Board extends Component {

    render() {
        var matrix = this.props.currentState;
        return (<div className="row col-8">
            <div className="col-12 row justify-content-center">{matrix.map((row, index) => {
                return <div key={index} className="col-12 justify-content-center row m-1">{row.map((r, index2) => { return <div key={index2} className="col-2 text-center btn btn-primary">_</div> })}</div>;
            })}
            </div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {"currentState" : state.gameState };
}

export default connect(mapStateToProps)(Board);