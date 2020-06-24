import Calendar from '../client/components/Calendar.jsx';

describe('<Calendar/> component Testing', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Calendar />);
  });

  it('<Calendar/> component renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

});