// To make it a little easier (and so I don't have to configure the production API_HOST if I change URLS or have staging servers)
// Basically I am just saying, if the process.env.REACT_APP_API_HOST valiue is set then use it as the host value otherwise
// use the current window.loation.origin of the browser.  Since our .env file doesn't set this value then when we are not in
// development this will be compiled as ApiConfig.host = window.location.origin and be properly configured for production.
export const ApiConfig = {
  host: process.env.REACT_APP_API_HOST ? process.env.REACT_APP_API_HOST : window.location.origin
}
export default ApiConfig;