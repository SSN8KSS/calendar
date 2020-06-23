import React from 'react';
import Main from '../client/components/Main.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Main component Testing', () => {

  test('should have a tag element with predefined text', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('h5').text()).toContain('people currently viewing');
  });


});
