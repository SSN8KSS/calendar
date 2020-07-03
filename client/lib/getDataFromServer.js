import axios from 'axios';

const getDataFromServer = async (term) => {
  console.log('REQUEST FROM APP RECIEVED');
  const response = await axios.get(`/api/calendar/db/${term}`);
  return response.data;
};

export default getDataFromServer;