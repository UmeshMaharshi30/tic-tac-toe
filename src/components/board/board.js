import React, {Component} from 'react';
import { connect } from "react-redux";

class Board extends Component {

    render() {
        var matrix = this.props.currentState;
        var grid_html = "<div className='col-6'>";
        for(var i = 0; i < matrix.length; i++) {
            grid_html += "<div className='col-2'>";
            for(var j = 0; j < matrix[0].length; j++) {
                grid_html += "<div className=\"btn btn-primary\">" + i + " " + j + "</div>";
            }
            grid_html += "</div>"
        }
        grid_html += "</div>";
        return (<div className="row">
            <h1 className="text-center col-12">Board</h1>
            <div className="col-12 row justify-content-center">{matrix.map((row, index) => {
                return <div key={index} className="col-9 justify-content-center row m-1">{row.map((r, index2) => { return <div key={index2} className="col-2 text-center btn btn-primary">_</div> })}</div>;
            })}
            </div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {"currentState" : state.gameState };
}

export default connect(mapStateToProps)(Board);