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

    min-height: 18px;
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

min-height: 18px;
`;

export const AllDealsEntityServiceIconSpan = styled.span`
&:before {
  display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    content:'➚'
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
    min-height: 18px;

`;

export const AllDealsBottomDiv = styled.div`

`;

