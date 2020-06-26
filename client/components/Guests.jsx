import React from 'react';
import Children from './Children.jsx';

class Guests extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='guests-container'>Guests
        <div>

          <div className='guests-line'>Rooms
            <span>icon</span>
            <span>splitter</span>
            <span>minus</span>
            <span>field</span>
            <span>plus</span>
          </div>

          <div>Adults
            <span>icon</span>
            <span>splitter</span>
            <span>minus</span>
            <span>field</span>
            <span>plus</span>
          </div>

          <div>Children
            <span>icon</span>
            <span>splitter</span>
            <span>minus</span>
            <span>field</span>
            <span>plus</span>
          </div>

        </div>

        <div>
          <Children />
        </div>

      </div>
    )
  }
}

export default Guests;