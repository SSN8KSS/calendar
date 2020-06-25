import React from 'react';

const AllDeals = ({currentHotel}) => {
  if (currentHotel.length === 0) {
    return ( <div>Loading data...</div>);
  } else {
    const displaySix = [];

    for (var i = 0; i < 6; i++) {
      displaySix.push(
        <div className="allDeals-line" key={i}>
          <span>{currentHotel[0].prices[i].serviceName}</span>
          <span>{currentHotel[0].prices[i].price}</span>
        </div>);
      }
    return (
      <div className="allDeals-container">
        <div className="allDeals-grid">
       {displaySix}
        </div>

      <div style={{'text-align':'center'}}>View all deals</div>
      <div style={{'text-align':'center'}}>Comment</div>

      </div>
    );

  }
}

export default AllDeals;