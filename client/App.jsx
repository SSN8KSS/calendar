import React from 'react';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import Guests from './components/Guests.jsx';
import BestDeals from './components/BestDeals.jsx';
import AllDeals from './components/AllDeals.jsx';
import moment from 'moment';
import getDataFromServer from './lib/getDataFromServer.js';
import getUpdatedDataFromServer from './lib/getUpdatedDataFromServer.js';
import styled from 'styled-components';
import {MainWrapper, AppWrapper, HeaderWrapper, HeaderSpan, CalendarWrapper, GuestsWrapper, AllDealsWrapper, BestDealsWrapper} from './AppStyles.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      calendarView: false,
      guestsView: false,
      currentHotel: [],
      checkIn: false,
      checkOut: false
    };
    this.getData = this.getData.bind(this);
    this.getUpdatedData = this.getUpdatedData.bind(this);
    this.calculateAvrgRate = this.calculateAvrgRate.bind(this);
    this.renderCalendar = this.renderCalendar.bind(this);
    this.changeCalendarView = this.changeCalendarView.bind(this);
    this.renderGuests = this.renderGuests.bind(this);
    this.changeGuestsView = this.changeGuestsView.bind(this);
  }

  componentDidMount () {
    this.getData('94');
  }

  getData (term) {
    const response = getDataFromServer(term);
    response.then((hotel) => {
      this.setState({
        currentHotel: hotel
      });
    });
  }

  getUpdatedData (...args) {
    let query = [...args][0];
    query.id = this.state.currentHotel[0].id;
    if (query.checkIn) {
      this.setState({
        checkIn: query.checkIn,
        checkOut: query.checkOut
      });
    }
    if (!query.guestsNumber) {
      query.guestsNumber = 2;
    }
    if (!query.roomsNumber) {
      query.roomsNumber = 1;
    }
    if (!query.checkIn) {
      if (!this.state.checkIn) {
        query.checkIn = moment().format('YYYY-MM-DD');
      } else {
        query.checkIn = this.state.checkIn;
      }
    }
    if (!query.checkOut) {
      if (!this.state.checkOut) {
        query.checkOut = moment().add(1, 'day').format('YYYY-MM-DD');
      } else {
        query.checkOut = this.state.checkOut;
      }
    }
    const response = getUpdatedDataFromServer(query);
    response.then((hotel) => {
      console.log('RESPONCE', hotel);
      if (hotel[0]['err_msg']) {
        console.log(hotel[0]['err_msg']);
      } else {
        this.setState({
          currentHotel: hotel
        });
      }
    });
  }

  calculateAvrgRate () {
    if (!this.state.currentHotel[0]) {
      return 'Loading...';
    } else {
      const prices = this.state.currentHotel[0].prices;
      let smallest = prices[0];
      let biggest = prices[1];
      for (let i = 0; i < prices.length; i++) {
        if (prices[i].price) {
          if (prices[i].price < smallest) {
            smallest = prices[i].price;
          }
          if (prices[i].price > biggest) {
            biggest = prices[i].price;
          }
        }
      }
      return `$${smallest.price} - $${biggest.price}`;
    }
  }

  changeCalendarView () {
    this.setState({
      calendarView: !this.state.calendarView
    });
  }

  renderCalendar () {
    if (!this.state.calendarView) {
      return (
        <div className="cal-land-container">

          <div className="check-field" onClick={this.changeCalendarView}>CheckInField</div>
          <div></div>
          <div className="check-field" onClick={this.changeCalendarView}>CheckOutField</div>

        </div>
      );
    }
    if (this.state.calendarView) {
      return (
        <div>

          <div className="cal-land-container">
            <div className="check-field" onClick={this.changeCalendarView}>CheckInField</div>
            <div></div>
            <div className="check-field" onClick={this.changeCalendarView}>CheckOutField</div>
          </div>

          <div>
            <Calendar
              getUpdatedData={this.getUpdatedData}
              calculateAvrgRate={this.calculateAvrgRate}/>
          </div>

        </div>
      );

    }
  }

  changeGuestsView () {
    this.setState({
      guestsView: !this.state.guestsView
    });
  }

  renderGuests () {
    if (!this.state.guestsView) {
      return (
        <div className="guests-land-container">
          <div onClick={this.changeGuestsView}>Guests</div>
        </div>
      );
    }
    if (this.state.guestsView) {
      return (
        <div>

          <div className="guests-land-container">
            <div onClick={this.changeGuestsView}>Guests</div>
          </div>

          <div>
            <Guests getUpdatedData={this.getUpdatedData}/>
          </div>

        </div>
      );
    }
  }


  render () {

    return (
      <MainWrapper>
        <AppWrapper>

          <HeaderWrapper>
            <HeaderSpan>
              5 people currently viewing this hotel
            </HeaderSpan>
          </HeaderWrapper>

          <CalendarWrapper>
            {this.renderCalendar()}
          </CalendarWrapper>

          <GuestsWrapper>
            {this.renderGuests()}
          </GuestsWrapper>

          <BestDealsWrapper>
            <BestDeals currentHotel={this.state.currentHotel}/>
          </BestDealsWrapper>

          <AllDealsWrapper>
            <AllDeals currentHotel={this.state.currentHotel}/>
          </AllDealsWrapper>

        </AppWrapper>
      </MainWrapper>
    );
  }
}

export default App;