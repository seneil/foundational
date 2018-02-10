import axios from 'axios';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const effectReconciler = ({ url, ...options }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const parameters = {
    url,
    headers,
    ...options,
  };

  return axios(parameters)
    .then(response => (response.status === 200 ? response.data : Promise.reject()));
};

export default {
  ...offlineConfig,
  effect: effectReconciler,
};
