import axios from 'axios';
const apiRequest = axios.create({ baseURL: 'https://api.bybits.co.uk/' });

export const signIn = (values) => {
  const postData = {
    "username": values.email,
    "password": values.password,
    "type": "USER_PASSWORD_AUTH"
  };
  const signInHeaders = {
    'environment': 'mock',
    'Content-Type': 'application/json',
  };
  return apiRequest.post('/auth/token', postData, { headers: signInHeaders })
    .then(({ data }) => {
      return data;
    });
};

export const getPolicy = (accessToken) => {
  const getPolicyHeaders = {
    'environment': 'mock',
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };
  return apiRequest.get('/policys/details', { headers: getPolicyHeaders })
    .then(({ data }) => {
      return data;
    });
};