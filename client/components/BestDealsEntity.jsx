import React from 'react';

const BestDealsEntity = ({item}) => (
  <div className="allDeals-line">
    <span>{item.serviceName}</span>
    <span>{item.price}</span>
  </div>
);

export default BestDealsEntity;