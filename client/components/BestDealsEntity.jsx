import React from 'react';
import styled from 'styled-components';
import {
  BestDealsEntityDiv, BestDealsEntityHeadDiv, BestDealsEntityLogoDiv, BestDealsEntityPriceDiv, BestDealsEntityButton, BestDealsEntityLogoPicture, BestDealsEntityPriceInnerDiv, BestDealsEntityPriceInnerDivQuote, BestDealsEntityButtonDiv, BestDealsEntityButtonDivSpan

} from './BestDealsEntityStyles.js';

const BestDealsEntity = ({item}) => (
  <div>
    <BestDealsEntityDiv>
      <BestDealsEntityHeadDiv>

        <BestDealsEntityLogoDiv>
          <BestDealsEntityLogoPicture src="https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png">
          </BestDealsEntityLogoPicture>
        </BestDealsEntityLogoDiv>


        <BestDealsEntityPriceDiv>
          {/* <BestDealsEntityPriceInnerDiv> */}
            <BestDealsEntityPriceInnerDivQuote>${item.price}</BestDealsEntityPriceInnerDivQuote>
          {/* </BestDealsEntityPriceInnerDiv> */}

        </BestDealsEntityPriceDiv>

        <BestDealsEntityButton>
          <BestDealsEntityButtonDiv>
            <BestDealsEntityButtonDivSpan>View Deal</BestDealsEntityButtonDivSpan>
          </BestDealsEntityButtonDiv>
        </BestDealsEntityButton>
      </BestDealsEntityHeadDiv>

      {/* <span>{item.serviceName}</span>
      <span>{item.price}</span> */}
    </BestDealsEntityDiv>
  </div>
);

export default BestDealsEntity;