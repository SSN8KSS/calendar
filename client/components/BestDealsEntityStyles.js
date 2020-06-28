import styled from 'styled-components';


export const BestDealsEntityDiv = styled.div`
  color: white;
  font-family: 'Trip Sans', Arial, sans-serif;

  cursor: pointer;
    color: #000;
    position: relative;
    border: solid #e0e0e0;
    border-width: 0 0 1px;
    padding: 10px 0;
`;

export const BestDealsEntityHeadDiv = styled.div`
display:flex;
margin-left: 0;
margin-right: 0;
`;

export const BestDealsEntityLogoDiv = styled.div`
color: #4a4a4a;
font-weight: 700;
height: 45px;
-webkit-align-self: stretch;
-ms-flex-item-align: stretch;
align-self: stretch;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;

width: 33.33333333%;
`;

export const BestDealsEntityLogoPicture = styled.img`
// fix sizes
width: 103px;
height: 44px;
`;

export const BestDealsEntityPriceDiv = styled.div`
color: black;

width: 33.33333333%;
`;

export const BestDealsEntityPriceInnerDiv = styled.div`
width: 33.33333333%;
`;

export const BestDealsEntityPriceInnerDivQuote = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  padding-top:5px;
  font-family: 'Trip Sans', Arial, sans-serif;
  padding-right: 5px;
`;

export const BestDealsEntityButton = styled.div`
width: 33.33333333%;
flex:none;
`;

export const BestDealsEntityButtonDiv = styled.div`
    display: block;
    min-height: 42px;
    // padding-left: 12px;
    // padding-right: 12px;
    border-radius: 12px;
    border-color: #f2b203;
    background-color: #f2b203;
    color: #000;
`;

export const BestDealsEntityButtonDivSpan = styled.span`
display: block;
padding: 10px 22px;
font-size: 16px;
line-height: 20px;
`;

export const BestDealsEntityBottomDiv = styled.div`
display: block;
`;

export const BestDealsEntityCancellationDiv = styled.div`
display: inline-block;
    margin-right: 8px;

line-height: 12px;
    font-size: 12px;
    color: #4a4a4a;

`;

export const BestDealsEntityCancellationCheckSpan = styled.span`
&:before {
  display: inline-block;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    line-height: 1;
    -ms-transform: rotate(-.001deg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    speak: none;
    text-decoration: none;
    content: "✔"
}

color: #000;
font-size: 18px;
padding-right: 4px;
`;

export const BestDealsEntityCancellationTextSpan = styled.span`

${props => {
    if (props.type === 'fat') {
      return 'font-weight:700;font-size: 14px;';
    } else {
      return 'font-weight:400;font-size: 12px;';
    }
  }}
line-height: 12px;
font-family: 'Trip Sans', Arial, sans-serif;
`;