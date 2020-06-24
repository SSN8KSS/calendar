import Guests from '../client/components/Guests.jsx';

describe('<Guests/> component Testing', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Guests />);
  });

  it('<Guests/> component renders properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

});