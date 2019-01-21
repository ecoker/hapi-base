const request = require('request');

(async () => {
  const responseBody = await request({
    uri: 'http://apirouter.apps-dev.wwt.com/api/forward/deliveries?sourceLineId=44411485',
    method: 'GET',
    headers: {
      'referer': 'ordering-api-gateway',
      'remote-user': 'svc_customer-ordering-api',
    }
  }, (error, response, body) => {
    console.log(response, body);
  });
  console.log(responseBody);
})();
