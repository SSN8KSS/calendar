import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMonth: moment(new Date()),
      selectedDate: moment(new Date()),
      nextMonth: moment(new Date()).add(1, 'month'),
      checkIn: false,
      checkOut: false,
      clickCounter: 0
    };
    this.onDateClick = this.onDateClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.checkState = this.checkState.bind(this);
  }

  renderNavbar () {
    const dateFormat = 'MMMM yyyy';

    return (
      <div className="navbar-container">
        <div className="col">
          <button type="button" onClick={this.prevMonth}>previous</button>
        </div>

        <div className="col">
          <span>
            {moment(this.state.currentMonth).format(dateFormat)}
          </span>
        </div>
        <div className="col">
          <span>
            {moment(this.state.nextMonth).format(dateFormat)}
          </span>
        </div>

        <div className="col">
          <button type="button" onClick={this.nextMonth}>next</button>
        </div>
      </div>
    );
  }

  renderWeekDays (term) {
    const dateFormat = 'dddd';
    const days = [];

    let startDate;
    term === this.state.currentMonth ? startDate = moment(this.state.currentMonth).startOf('week') : startDate = moment(this.state.nextMonth).startOf('week');

    for (var i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}>
          {moment(startDate).add(i, 'days').format(dateFormat)}
        </div>);
    }
    return <div className="weekdays-row">{days}</div>;

  }

  renderCells (term) {
    let currentMonth;
    if (term === this.state.currentMonth) {
      currentMonth = this.state.currentMonth;
    } else {
      currentMonth = this.state.nextMonth;
    }
    const selectedDate = this.state.selectedDate;
    const dateFormat = 'D';
    const monthStart = moment(currentMonth).startOf('month');
    const monthEnd = moment(currentMonth).endOf('month');
    const startDate = moment(monthStart).startOf('week');
    const endDate = moment(monthEnd).endOf('week');

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day < endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        const dayCopy = day;
        days.push(
          <div
            className={`cell${
              !moment(day).isSame(monthStart, 'month') ? '-disabled' :
                moment(day).isSame(selectedDate, 'day') ? '-selected' : '' }`}
            key={day}
            onClick={ ()=>{ this.onDateClick(dayCopy); }}
          ><span className="number">{formattedDate}</span>
          </div>
        );
        day = moment(day).add(1, 'day');
      }
      rows.push(
        <div
          className="row"
          key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick (day) {
    if (!this.state.clickCounter) {
      this.setState({
        selectedDate: day,
        checkIn: day,
        clickCounter: 1
      }, () => { this.checkState(); });
    } else {
      if (!moment(day).isBefore(this.state.checkIn)) {
        this.setState({
          selectedDate: day,
          checkOut: day,
          clickCounter: 0
        }, () => { this.checkState(); });
      } else {}
    }
  }

  checkState() {
    if (this.state.checkIn && this.state.checkOut) {
      const dates = {checkIn: this.state.checkIn, checkOut: this.state.checkOut};
      this.props.getUpdatedData(dates);
    }
  }

  nextMonth () {
    this.setState({
      currentMonth: moment(this.state.currentMonth).add(1, 'month'),
      nextMonth: moment(this.state.nextMonth).add(1, 'month')
    });
  }

  prevMonth () {
    this.setState({
      currentMonth: moment(this.state.currentMonth).subtract(1, 'month'),
      nextMonth: moment(this.state.nextMonth).subtract(1, 'month')
    });
  }

  render () {
    return (
      <div className="main-container">
        <div className="main-container-header"><span className="main-cont-header-span">Select a date to continue</span></div>
        <div className="navbar">{this.renderNavbar()}</div>

        <div className="calendar-layout-container">
          <div className="calendar-body">
            <div className="calendar-weekday">{this.renderWeekDays(this.state.currentMonth)}</div>
            <div className="calendar-cells">{this.renderCells(this.state.currentMonth)}</div>
          </div>
          <div className="calendar-body">
            <div className="calendar-weekday">{this.renderWeekDays(this.state.nextMonth)}</div>
            <div className="calendar-cells">{this.renderCells(this.state.nextMonth)}</div>
          </div>
        </div>

        <div className="main-container-bottom"><span className="main-cont-header-span">Average daily rates: $122-$285</span></div>

      </div>
    );
  }
}

export default Calendar;
