import axios from 'axios';

const getUpdatedDataFromServer = async (param) => {
  const response = await
  axios.get(`/api/calendar/update/?checkIn=${param.checkIn}&checkOut=${param.checkOut}&guestsNumber=${param.guestsNumber}&id=${param.id}&roomsNumber=${param.roomsNumber}`);
  return response.data;
};

export default getUpdatedDataFromServer;