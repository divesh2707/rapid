import axios from 'axios';

const convertToPDF = (fileName) => {
  return axios.post('http://localhost:5000/api/convert', { fileName });
};

export { convertToPDF };
