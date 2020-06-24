import React from 'react';
import AllDeals from '../client/components/AllDeals.jsx';

describe('<AllDeals/> component Testing', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<AllDeals />);
  });

  it('<Calendar/> component renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

});