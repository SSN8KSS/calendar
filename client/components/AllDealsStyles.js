import styled from 'styled-components';

export const AllDealsWrapper = styled.div`
margin-top: 8px;
display: block;
`;

export const AllDealsMainDiv = styled.div`
display: flex;
margin-left: -12px;
    margin-right: -12px;
    box-sizing: border-box;
    flex-wrap: wrap;
`;

export const AllDealsEntityOuter = styled.div`
flex: none;
    width: 50%;
    padding: 2px 12px;
    box-sizing: border-box;
    min-height: 18px;

    max-height: 18px;
`;

export const AllDealsEntityInner = styled.div`

margin: 0;
    padding: 0;
    display: flex;
    color: #4a4a4a;
    position: relative;
    overflow: hidden;
    min-height: 18px;
    line-height: 1.5em;
    cursor: pointer;
    font-size: 12px;

`;

export const AllDealsEntityServiceSpan = styled.span`
  //before
  padding-right: 3px;
    position: relative;
    display: flex;
    max-width: 100px;

    min-height: 18px;
`;

export const AllDealsEntityServiceNameSpan = styled.span`
display: flex;
color: #4a4a4a;
position: relative;
overflow: hidden;
min-height: 18px;
line-height: 1.5em;
cursor: pointer;
font-size: 12px;

`;

export const AllDealsEntityServiceIconSpan = styled.span`
&:before {
  display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    // content:'➚';
    // content:'⇱';
}
display: flex;
color: #4a4a4a;
position: relative;
overflow: hidden;
min-height: 18px;
line-height: 1.5em;
cursor: pointer;
font-size: 16px;
padding-top:2px;
padding-left:2px;

`;


export const AllDealsEntityPriceSpan = styled.span`
position: absolute;
    right: 0;
    padding-left: 3px;
    font-weight: 700;
    color: #000a12;

    min-height: 18px;

`;

export const AllDealsBottomDiv = styled.div`
margin: 8px 0 12px;
font-size: 13px;
line-height: 17px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
color: #767676;
cursor: pointer;
`;

export const ViewAllWrapper = styled.div`
flex-shrink: 1;
    padding: 2px;
    box-sizing: border-box;
    flex-grow: 1;
    flex-basis: 0;
    -webkit-box-flex: 1;
    display: block;
`;

export const ViewAllDiv = styled.div`
color: #000a12;
    font-weight: 700;
    height: 18px;
    line-height: 1.5em;
    cursor: pointer;
    font-size: 12px;

`;

export const ViewAllPortalWrapper = styled.div`

background-color: lightblue;
  width: 208px;
  height: auto;

  padding: 4px 16px 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
  position: relative;
  z-index: 20;
`;

export const ViewAllPortal = styled.div`
display: flex;
flex-direction: column;
width: 160px;
// font-size: .75rem;
`;

export const ViewAllPortalLine = styled.div`
// display: flex;
  color: #4a4a4a;
    position: relative;
    overflow: hidden;
    min-height: 18px;
    line-height: 1.5em;
    cursor: pointer;
    font-size: 12px;
    width: 100%;
`;

export const ViewAllPortalLineServiceDiv = styled.div`
padding-right: 3px;
position: relative;
display: flex;
max-width: 100px;
background: #fff;
    // z-index: 1;
`;

export const ViewAllPortalLineServiceIcon = styled.span`
display: inline-block;
font-style: normal;
font-weight: 400;
font-variant: normal;
font-size: inherit;
line-height: 1;
// font-family: TripAdvisor_Regular!important;
-webkit-font-smoothing: antialiased;
speak: none;
`;

export const ViewAllPortalPriceSpan = styled.span`
position: absolute;
right: 0;
padding-left: 3px;
font-weight: 700;
color: #000a12;
line-height: 1.5em;
    cursor: pointer;
    font-size: 12px;
`;

