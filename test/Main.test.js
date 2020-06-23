import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../client/components/Main.jsx';
import { shallow } from 'enzyme';

describe('<Main/> component Testing', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Main />);
    instance = wrapper.instance();
  });

  test('should render 5 elements', () => {
    expect(wrapper.children()).toHaveLength(5);
  });

  test('should have <h5> element with text', () => {
    expect(wrapper.find('h5').text()).toContain('people currently viewing');
  });

  test('should have "currentHotel" state property', ()=>{
    expect(instance.state.currentHotel).not.toBe(undefined);
  });

  test('"currentHotel" state property should be an empty array', ()=>{
    expect(instance.state.currentHotel.length).toBe(0);
  });

});
