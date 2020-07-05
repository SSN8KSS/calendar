import React from 'react';
import styled from 'styled-components';
import {
  BestDealsEntityDiv, BestDealsEntityHeadDiv, BestDealsEntityLogoDiv, BestDealsEntityPriceDiv, BestDealsEntityButton, BestDealsEntityLogoPicture, BestDealsEntityPriceInnerDiv, BestDealsEntityPriceInnerDivQuote, BestDealsEntityButtonDiv, BestDealsEntityButtonDivSpan, BestDealsEntityBottomDiv, BestDealsEntityCancellationDiv, BestDealsEntityCancellationTextSpan
  // BestDealsEntityNoticeDiv

} from './BestDealsEntityStyles.js';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BestDealsEntity = ({item}) => {

  const chooseLogo = (item) => {
    const links = {
      'Hotels.com': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png',
      'Booking.com': 'https://static.tacdn.com/img2/branding/hotels/booking logo.png',
      'Expedia.com': 'https://static.tacdn.com/img2/branding/hotels/expediaib_new_384164.png',
      'Snaptravel': 'https://static.tacdn.com/img2/branding/hotels/Snaptravel_384x164.png',
      'Orbitz.com': 'https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png',
      'Travelocity': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png',
      'CheapTickets': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png',
      'Priceline': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png',
      'travelup.com': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png',
      'Tripadvisor': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png'
    };
    return (
      <BestDealsEntityLogoPicture src={links[item.serviceName]}></BestDealsEntityLogoPicture>
    );
  };

  return (
    <div>
      <BestDealsEntityDiv>

        <BestDealsEntityHeadDiv>

          <BestDealsEntityLogoDiv>
            {chooseLogo(item)}
          </BestDealsEntityLogoDiv>

          <BestDealsEntityPriceDiv>
            <BestDealsEntityPriceInnerDivQuote>${item.price}</BestDealsEntityPriceInnerDivQuote>
          </BestDealsEntityPriceDiv>

          <BestDealsEntityButton>
            <BestDealsEntityButtonDiv>
              <BestDealsEntityButtonDivSpan>View Deal</BestDealsEntityButtonDivSpan>
            </BestDealsEntityButtonDiv>
          </BestDealsEntityButton>
        </BestDealsEntityHeadDiv>

        <BestDealsEntityBottomDiv>
          <BestDealsEntityCancellationDiv>
            <FontAwesomeIcon icon={faCheck}/>
            <BestDealsEntityCancellationTextSpan type="fat">Free cancellation until 09/22/20</BestDealsEntityCancellationTextSpan>
          </BestDealsEntityCancellationDiv>

          <BestDealsEntityCancellationDiv>
            <FontAwesomeIcon icon={faCheck}/>
            <BestDealsEntityCancellationTextSpan type="slim">Reserve now, pay at stay</BestDealsEntityCancellationTextSpan>
          </BestDealsEntityCancellationDiv>
        </BestDealsEntityBottomDiv>

      </BestDealsEntityDiv>
    </div>
  );
};

export default BestDealsEntity;

//tripadvisor
// url(/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary.svg) no-repeat