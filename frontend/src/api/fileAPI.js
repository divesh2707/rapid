import axios from 'axios';

const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('http://localhost:5000/api/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export { uploadFile };
