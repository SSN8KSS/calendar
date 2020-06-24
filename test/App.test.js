import React from 'react';
import App from '../client/components/App.jsx';

jest.mock('../client/lib/getDataFromServer');

describe('<App/> component Testing', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('<App/> component should render properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('<h5> element should exist', () => {
    expect(wrapper.find('h5').exists()).toBe(true);
  });

  it('<h5> element should have text', () => {
    expect(wrapper.find('h5').text()).toContain('people currently viewing');
  });

  it('should have "currentHotel" state property', () => {
    expect(instance.state.currentHotel).not.toBe(undefined);
  });

  it('"currentHotel" state property should be updated after componendDidMount called', () => {
    expect(instance.state.currentHotel.length).toBe(1);
  });

});
