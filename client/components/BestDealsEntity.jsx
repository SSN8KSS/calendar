import React from 'react';
import styled from 'styled-components';
import {
  BestDealsEntityDiv, BestDealsEntityHeadDiv, BestDealsEntityLogoDiv, BestDealsEntityPriceDiv, BestDealsEntityButton, BestDealsEntityLogoPicture, BestDealsEntityPriceInnerDiv, BestDealsEntityPriceInnerDivQuote, BestDealsEntityButtonDiv, BestDealsEntityButtonDivSpan, BestDealsEntityBottomDiv, BestDealsEntityCancellationDiv, BestDealsEntityCancellationCheckSpan, BestDealsEntityCancellationTextSpan
  // BestDealsEntityNoticeDiv

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
          <BestDealsEntityCancellationCheckSpan></BestDealsEntityCancellationCheckSpan>
          <BestDealsEntityCancellationTextSpan type="fat">Free cancellation until 09/22/20</BestDealsEntityCancellationTextSpan>
        </BestDealsEntityCancellationDiv>

        <BestDealsEntityCancellationDiv>
          <BestDealsEntityCancellationCheckSpan></BestDealsEntityCancellationCheckSpan>
          <BestDealsEntityCancellationTextSpan type="slim">Reserve now, pay at stay</BestDealsEntityCancellationTextSpan>
        </BestDealsEntityCancellationDiv>
      </BestDealsEntityBottomDiv>

    </BestDealsEntityDiv>
  </div>
);

export default BestDealsEntity;