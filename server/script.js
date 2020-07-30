import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1600,
  duration: '90s',
};

export default function() {
  let hotelId = Math.floor(Math.random() * (100000)) + 1;
  http.get(`http://localhost:3001/api/calendar/hotels/${hotelId}`);
  sleep(1);
}


// RUN K6:
// $ k6 run script.js