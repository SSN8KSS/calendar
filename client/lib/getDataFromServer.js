import axios from 'axios';

const getDataFromServer = async (term) => {
  const response = await axios.get(`http://localhost:8080/api/calendar/${term}`);
  return response.data;
};

export default getDataFromServer;