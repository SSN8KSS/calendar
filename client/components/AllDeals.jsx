import React from 'react';
import getBestOrRestDeals from '../lib/getBestOrRestDeals.js';
import styled from 'styled-components';
import {AllDealsWrapper, AllDealsMainDiv, AllDealsBottomDiv, AllDealsEntityOuter, AllDealsEntityInner, AllDealsEntityServiceSpan, AllDealsEntityPriceSpan, AllDealsEntityServiceNameSpan, AllDealsEntityServiceIconSpan, ViewAllWrapper, ViewAllDiv} from './AllDealsStyles.js';

import { faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AllDeals extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isClicked: false,
      allDealsView: false
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

          <AllDealsEntityOuter key={i}>
            <AllDealsEntityInner>

              <AllDealsEntityServiceSpan>
                <AllDealsEntityServiceNameSpan>
                {sorted[i].serviceName}
                </AllDealsEntityServiceNameSpan>

                <AllDealsEntityServiceIconSpan>

                </AllDealsEntityServiceIconSpan>
              </AllDealsEntityServiceSpan>


              <AllDealsEntityPriceSpan>${sorted[i].price}</AllDealsEntityPriceSpan>

            </AllDealsEntityInner>
          </AllDealsEntityOuter>
        );

          // <div className="allDeals-line" key={i}>
          //   <span>{sorted[i].serviceName}</span>
          //   <span>{sorted[i].price}</span>
          // </div>);


      }
      return displaySix.slice(0, 4);
    }
  }

  onClickHandler () {
    this.setState({
      isClicked: !this.state.isClicked,
      allDealsView: !this.state.allDealsView
    });
  }

  renderAll () {
    let hotels = this.props.currentHotel;
    if (hotels.length === 0 || !hotels) {
      return (<div>Loading...</div>);
    } else {
      let rates = [];
      for (var i = hotels[0].prices.length - 1; i >= 0; i--) {
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

  renderAllDeals () {
    if (!this.state.allDealsView) {
      return (

        <AllDealsWrapper>

          <AllDealsMainDiv>
          {this.renderFour(this.props.currentHotel)}
          </AllDealsMainDiv>

          <ViewAllWrapper onClick={this.onClickHandler}>
            <ViewAllDiv>View all 10 deals
              <FontAwesomeIcon icon={faCaretDown}/>
            </ViewAllDiv>
          </ViewAllWrapper>

          <AllDealsBottomDiv>
          Prices are the average nightly price provided by our partners and may not include all taxes and fees. Taxes and fees that are shown are estimates only. Please see our partners for more details.
          </AllDealsBottomDiv>


        </AllDealsWrapper>



        // <div className="allDeals-container">
          // <div className="allDeals-grid">{this.renderFour(this.props.currentHotel)}</div>
          // <button type="button" onClick={this.onClickHandler}>View All</button>
        // </div>



      );
    }

    if (this.state.allDealsView) {
      return (
        <div>
          <div className="allDeals-grid">{this.renderFour(this.props.currentHotel)}</div>
          <div>{this.renderAll()}</div>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        {this.renderAllDeals()}
      </div>
    );
  }
}

export default AllDeals;