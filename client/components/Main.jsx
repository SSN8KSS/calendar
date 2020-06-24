import React from 'react';
import axios from 'axios';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import BestDeals from './BestDeals.jsx';
import AllDeals from './AllDeals.jsx';
import getDataFromServer from '../lib/getDataFromServer.js';

class Main extends React.Component {
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
          <AllDeals />
        </div>
      </div>
    );
  }
}

export default Main;