import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ResturantCard } from './resturants-card'

class ResturantList extends React.Component {
    
    renderRentalList() {
        return this.props.resturants.map((resturant, index) => {

            return (
                <ResturantCard key={index} resturant={resturant}/>
            )
        });
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchResturants());
    }

    handleChange(e) {
        this.search = e.target.value;
        this.props.dispatch(actions.fetchResturants(this.search,this.sort));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.sort !== this.sort) {
            this.props.dispatch(actions.fetchResturants(this.search,nextProps.sort));
        }
        this.sort = nextProps.sort;
    }

    render() {
        return (
              <div className="col-md-8">
                <input className="form-control" type="text" onChange={(e) => {this.handleChange(e)}} placeholder="Search for restaurants or cuisines..." aria-label="Search"></input>
                <div className="total-text grey-color">Total number of restaurants found:<span>{this.props.resturants.length}</span></div>
                {this.renderRentalList()}
            </div>
        )
    }
}

function mapStateToprop(state) {
    return {
        resturants: state.resturants.data,
        sort: state.sort.sort
    }
}

export default connect(mapStateToprop) (ResturantList)