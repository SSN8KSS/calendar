const fakeData = [{
  hotelName: 'Fake Hotel',
  id: 93,
  maxGuestPerRoom: 4,
  prices: [],
  roomsTotal: 60,
  vacancy: [],
  __v: 0,
  _id: '5ef005f4d833a26c15c64d1d'
}];

const getDataFromServer = (term) => {
  const response = new Promise((resolve) => {
    resolve(fakeData);
  });
  return response;
};

export default getDataFromServer;