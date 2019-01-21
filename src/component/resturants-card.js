import React from 'react';

export function ResturantCard(props) {
    const data = props.resturant;
    const ratingColor = props.resturant.ratingColor;
    let docolor = {};
    if (ratingColor === 'Dark Green')
        docolor = { backgroundColor: 'darkgreen', color: 'white', fontWeight: 700 };
    else {
        docolor = { backgroundColor: ratingColor, color: 'white', fontWeight: 700 }
    }

    let bookTable;
    if (data.hasTableBooking === 'Yes') {
        bookTable = <button className="btn btn-md btn-success" onClick={()=>{alert('Table booked')}}><span><i className='fa fa-building'></i>Book Table</span></button>;
    }
    else {
        bookTable = <button className="btn btn-md btn-success" disabled><span><i className='fa fa-building'></i>Book Table</span></button>;
    }

    let orderOnline;
    if (data.hasOnlineDelivery === 'Yes') {
        orderOnline = <button className="btn btn-md btn-success"  onClick={()=>{alert('Order Recived')}}><span><i className="fa fa-shopping-cart"></i>Order Online</span></button>;
    } else {
        orderOnline = <button className="btn btn-md btn-success" disabled><span><i className="fa fa-shopping-cart"></i>Order Online</span></button>;
    }

    return (
        <div className="res-card">
            <div className="row">
                <div className="text-pri col-sm-10" >{data.name}</div>
                <button style={docolor} data-toggle="tooltip" title={data.ratingText} className="btn btn-xs margin-left">
                    <i className="fa fa-star"></i>
                    {data.aggregateRating}</button>
            </div>

            <div className="row">
                <div className="col-sm-11" >{data.city}</div>
                <div className="vote">{data.votes} votes</div>
            </div>
            <div className="grey-color margin-bottom text-13">{data.address}</div>
            <div className='row'>
                <div className="col-sm-3 text-sec grey-color ">Cuisines:</div>
                <div className="col-sm-6">{data.cuisines}</div>
            </div>
            <div className="row">
                <div className="col-sm-3 text-sec grey-color">Cost For Two:</div>
                <div className="col-sm-6">{data.averageCost}</div>
            </div>
            <div className="margin-bottom"></div>
            <div className="row">
                <div className="col-sm-4">
                    {bookTable}
                </div>
                <div className="col-sm-4">
                    {orderOnline}
                </div>
            </div>

        </div>
    )
}