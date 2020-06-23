import React from 'react';
import axios from 'axios';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import BestDeals from './BestDeals.jsx';
import AllDeals from './AllDeals.jsx';

class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentHotel: []
    };
  }

  componentDidMount () {
    axios.get('http://localhost:8080/api/calendar/93')
      .then((res) => {
        console.log('GET success');
        this.setState({
          currentHotel: res.data
        });
      })
      .catch((err) => {
        console.log('GET failed', err);
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