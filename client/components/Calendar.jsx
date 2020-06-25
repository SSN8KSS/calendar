import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMonth: moment(new Date()),
      selectedDate: moment(new Date()),
      nextMonth: moment(new Date()).add(1, 'month')
    };
    this.onDateClick = this.onDateClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  onDateClick () {}

  nextMonth () {}

  prevMonth () {}

  render () {
    return (
      <div className="main-container">
        <div className="main-container-header">Header</div>
        <div className="calendar-layout-container">
          <div className="navbar">Navbar</div>

          <div className="calendar-body">
            left calendar
            <div className="calendar-head">Header with month and year</div>
            <div className="calendar-weekday">Day of the week bar</div>
            <div className="calendar-cells">Day cells</div>
          </div>


          <div className="calendar-body">right calendar</div>
          <div className="bottom-section">bottom section</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
