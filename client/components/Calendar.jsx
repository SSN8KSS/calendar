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
      <div>
        <h3>Calendar will be here</h3>
      </div>
    );
  }
}

export default Calendar;
