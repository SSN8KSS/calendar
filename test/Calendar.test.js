import React from 'react';
import Calendar from '../client/components/Calendar.jsx';
import { shallow, mount } from 'enzyme';


describe('<Calendar/> component Testing', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Calendar />);
    instance = wrapper.instance();
  });

  it('<Calendar/> component renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

});