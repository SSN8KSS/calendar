import React from 'react';
import Children from './Children.jsx';

class Guests extends React.Component {
  constructor () {
    super();

    this.state = {
      roomsNumber: 1,
      adultsNumber: 2,
      childrenNumber: 2
    };
    this.handleMinusClick = this.handleMinusClick.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
  }

  handleMinusClick (event) {
    const id = event.currentTarget.dataset.id;
    if (id === '0' && this.state.roomsNumber) {
      this.setState({
        roomsNumber: --this.state.roomsNumber
      });
    }
    if (id === '1' && this.state.adultsNumber) {
      this.setState({
        adultsNumber: --this.state.adultsNumber
      });
    }
    if (id === '2' && this.state.childrenNumber) {
      this.setState({
        childrenNumber: --this.state.childrenNumber
      });
    }
  }

  handlePlusClick (event) {
    const id = event.currentTarget.dataset.id;
    if (id === '0') {
      this.setState({
        roomsNumber: ++this.state.roomsNumber
      });
    }
    if (id === '1') {
      this.setState({
        adultsNumber: ++this.state.adultsNumber
      });
    }
    if (id === '2') {
      this.setState({
        childrenNumber: ++this.state.childrenNumber
      });
    }
  }

  render () {
    let links = {'state': ['roomsNumber', 'adultsNumber', 'childrenNumber']};
    const lines = [];
    for (let i = 0; i < 3; i++) {
      lines.push(
        <div className='guests-line' key={i}>
          <span>icon</span>
          <span>#</span>

          <span data-id={i} onClick={this.handleMinusClick}>minus</span>

          <span>{this.state[links.state[i]]}</span>

          <span data-id={i} onClick={this.handlePlusClick}>plus</span>
        </div>
      );
    }
    return (
      <div className='guests-container'>
        <div>{lines}</div>

        <div>
          <Children childrenNumber={this.state.childrenNumber}/>
        </div>

        <div>
          <button>UPDATE</button>
        </div>

      </div>
    );
  }
}

export default Guests;