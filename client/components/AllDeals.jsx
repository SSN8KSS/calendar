import React from 'react';
import getBestOrRestDeals from '../lib/getBestOrRestDeals.js';

class AllDeals extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isClicked: false
    };

    this.renderFour = this.renderFour.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  renderFour (hotels) {
    const displaySix = [];
    if (hotels.length === 0) {
      return ( <div>Loading data...</div>);
    } else {
      let sorted = getBestOrRestDeals(hotels, 'getRest');
      for (var i = 0; i < sorted.length; i++) {
        displaySix.push(
          <div className="allDeals-line" key={i}>
            <span>{sorted[i].serviceName}</span>
            <span>{sorted[i].price}</span>
          </div>);
      }
      return displaySix.slice(0, 4);
    }
  }

  onClickHandler () {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  renderAll () {
    let hotels = this.props.currentHotel;
    if (hotels.length === 0) {
      return (<div></div>);
    } else {
      let rates = [];
      for (var i = 0; i < hotels[0].prices.length; i++) {
        rates.push(
          <div key={i}>
            <span className="viewAll-span">{hotels[0].prices[i].serviceName}</span>
            <span className="viewAll-span">{hotels[0].prices[i].price}</span>
          </div>
        );
      }
      return rates;
    }
  }

  render () {
    return (
      <div className="allDeals-container">

        <div className="allDeals-grid">
          {this.renderFour(this.props.currentHotel)}
        </div>

        <div style={{'textAlign': 'center'}}>
          <button type="button" onClick={this.onClickHandler}>View All</button>

          <div className={`viewAll${
            this.state.isClicked ? '' : '-disabled'
          }`}>
            {this.renderAll()}
          </div>
        </div>
      </div>
    );
  }
}

export default AllDeals;