import request from 'superagent';
import ApiConfig from './apiConfig';

const valuesEndpoint = `${ApiConfig.host}/api/values`;

const dataService = store => next => action => {
  next(action)
  switch(action.type) {
    case 'GET_VALUES':
      request
        .get(valuesEndpoint)
        .end((err, res) => {
          if(err) {
            return next({type: 'GET_VALUES_ERROR', err})
          }
          const data = JSON.parse(res.text)
          next({type: 'GET_VALUES_RECEIVED', data})
        });
    break;
    default:
      break;
  }
};
export default dataService;