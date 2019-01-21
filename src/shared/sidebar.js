import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Sidebar extends React.Component {

    handleClick(e) {
        this.props.dispatch(actions.sortType(e.target.id));
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-2 col-sm-pull-9" id="sidebar">
                <div className="sidenav">
                    <div>Sort By</div>
                    <div><button type="button" id="aggregateRating-desc" onClick={(e) => { this.handleClick(e) }} className="btn btn-link">Rating-</button> 
                    <span className="grey-color">high to low</span></div>
                    <div><button type="button" id="aggregateRating-asc" onClick={(e) => { this.handleClick(e) }} className="btn btn-link">Rating-</button>
                    <span className="grey-color">low to high</span></div>
                    <div><button type="button" id="averageCost-desc" onClick={(e) => { this.handleClick(e) }} className="btn btn-link">cost-</button>
                    <span className="grey-color">high to low</span></div>
                    <div><button type="button" id="averageCost-asc" onClick={(e) => { this.handleClick(e) }} className="btn btn-link">cost-</button>
                    <span className="grey-color">low to high</span></div>
                    <div><button type="button" id="votes-desc" onClick={(e) => { this.handleClick(e) }} className="btn btn-link">Vote-</button>
                    <span className="grey-color">high to low</span></div>
                    <div><button type="button" id="votes-asc" onClick={(e) => { this.handleClick(e) }} className="btn btn-link">Vote-</button>
                    <span className="grey-color">low to high</span></div>
                </div>
            </div>)
    }
}

function mapStateToprop(state) {
    return {
        sort: state.sort,
    }
}

export default connect(mapStateToprop)(Sidebar)