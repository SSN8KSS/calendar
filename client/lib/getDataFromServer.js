import axios from 'axios';

const getDataFromServer = async (term) => {
  const response = await axios.get(`http://localhost:3001/api/calendar/db/${term}`);
  return response.data;
};

export default getDataFromServer;