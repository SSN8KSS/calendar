import React from 'react';
import Main from '../client/components/Main.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Main component Testing', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  })

  test('should have <h5> element with predefined text', () => {
    expect(wrapper.find('h5').text()).toContain('people currently viewing');
  });



});
