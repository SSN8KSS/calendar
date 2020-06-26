import React from 'react';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import Guests from './components/Guests.jsx';
import BestDeals from './components/BestDeals.jsx';
import AllDeals from './components/AllDeals.jsx';
import getDataFromServer from './lib/getDataFromServer.js';
import getUpdatedDataFromServer from './lib/getUpdatedDataFromServer.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentHotel: []
    };
    this.getData = this.getData.bind(this);
    this.getUpdatedData = this.getUpdatedData.bind(this);
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

  getUpdatedData (param, guests = 2, roomsNumber = 1) {
    console.log(param);
    const query = param;
    query['id'] = this.state.currentHotel[0].id;
    query['guestsNumber'] = guests;
    query['roomsNumber'] = roomsNumber;
    console.log(query);
    const response = getUpdatedDataFromServer(param);
    // response.then((hotel) => {
    //   // console.log(hotel);
    //   this.setState({
    //     currentHotel: hotel
    //   });
    // });
  }

  render () {

    return (
      <div>
        <div>
          <h5>5 people currently viewing this hotel</h5>
        </div>
        <div>
          <Calendar getUpdatedData={this.getUpdatedData}/>
        </div>
        <div>
          <Guests />
        </div>
        <div>
          <BestDeals currentHotel={this.state.currentHotel}/>
        </div>
        <div>
          <AllDeals currentHotel={this.state.currentHotel}/>
        </div>
      </div>
    );
  }
}

export default App;