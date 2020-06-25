import React from 'react';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import Guests from './components/Guests.jsx';
import BestDeals from './components/BestDeals.jsx';
import AllDeals from './components/AllDeals.jsx';
import getDataFromServer from './lib/getDataFromServer.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentHotel: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount () {
    this.getData('digital');
  }

  getData (term) {
    const response = getDataFromServer(term);
    response.then((hotel) => {
      // console.log(hotel);
      this.setState({
        currentHotel: hotel
      });
    });
  }

  render () {

    return (
      <div>
        <div>
          <h5>5 people currently viewing this hotel</h5>
        </div>
        <div>
          <Calendar />
        </div>
        <div>
          <Guests />
        </div>
        <div>
          <BestDeals />
        </div>
        <div>
          <AllDeals currentHotel={this.state.currentHotel}/>
        </div>
      </div>
    );
  }
}

export default App;