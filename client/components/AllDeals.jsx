import React from 'react';

class AllDeals extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isClicked: false
    };

    this.renderSix = this.renderSix.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  renderSix (hotels) {
    const displaySix = [];
    if (hotels.length === 0) {
      return ( <div>Loading data...</div>);
    } else {
      for (var i = 0; i < hotels[0].prices.length; i++) {
        if (hotels[0].prices[i].price !== 0) {
          displaySix.push(
            <div className="allDeals-line" key={i}>
              <span>{hotels[0].prices[i].serviceName}</span>
              <span>{hotels[0].prices[i].price}</span>
            </div>);
        }
      }
      return displaySix.slice(0, 6);
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
          {this.renderSix(this.props.currentHotel)}
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

// const AllDeals = ({currentHotel}) => {
//   let isClicked = false;
//   const renderSix = (hotels) => {
//     const displaySix = [];
//     if (hotels.length === 0) {
//       return ( <div>Loading data...</div>);
//     } else {
//       for (var i = 0; i < hotels[0].prices.length; i++) {
//         if (hotels[0].prices[i].price !== 0) {
//           displaySix.push(
//             <div className="allDeals-line" key={i}>
//               <span>{hotels[0].prices[i].serviceName}</span>
//               <span>{hotels[0].prices[i].price}</span>
//             </div>);
//         }
//       }
//       return displaySix.slice(0, 6);
//     }
//   };

//   const renderAll = () => {
//     console.log('called')
//     isClicked = true;
//   }

//   return (
//     <div className="allDeals-container">
//       <div className="allDeals-grid">
//         {renderSix(currentHotel)}
//       </div>

//       <div style={{'textAlign': 'center'}}>
//         <button type="submit" onClick={renderAll}>View all</button>
//         <div className={`viewAll${
//           isClicked ? '' : '-disabled'
//         }`}>
//           <span>LINE</span>
//           <span>LINE</span>
//           <span>LINE</span>
//           <span>LINE</span>
//           <span>LINE</span>
//           <span>LINE</span>
//         </div>
//       </div>

//       <div style={{'textAlign': 'center'}}>Comment</div>
//     </div>
//   );


// };


export default AllDeals;