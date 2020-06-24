import React from 'react';
import Main from '../client/components/Main.jsx';

jest.mock('../client/lib/getDataFromServer');

describe('<Main/> component Testing', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Main />);
    instance = wrapper.instance();
  });

  it('<Main/> component should render properly', () => {
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
