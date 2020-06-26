import React from 'react';
import BestDealsEntity from './BestDealsEntity.jsx';
import getBestOrRestDeals from '../lib/getBestOrRestDeals.js';

const BestDeals = ({currentHotel}) => {
  if (currentHotel.length === 0) {
    return (<div>Loading...</div>);
  } else {
    let best = getBestOrRestDeals(currentHotel, 'getBest');
    return (
      <div className="bestDeals-container">
        {best.map((item)=>(
          <BestDealsEntity
            item={item}
            key={item._id}
          />
        ))}
      </div>
    );
  }

};

export default BestDeals;