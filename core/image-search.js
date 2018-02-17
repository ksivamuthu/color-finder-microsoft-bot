var request = require('request-promise');

module.exports = function(config) {
  var apiKey = config && config.apiKey;
  if (!apiKey) throw new Error('API Key is required');

  var SEARCH_COUNT = 1;

  function search(query) {
    return fetch(query).then(function(result) {
       return result && result.value;
    });
  }

  function fetch(query) {
    var count = SEARCH_COUNT;
    var options = {
      uri: `https://api.cognitive.microsoft.com/bing/v7.0/images/search?count=${count}&q=${query}`,
      headers: {
        'Ocp-Apim-Subscription-Key': config.apiKey,
      },
      json: true // Automatically parses the JSON string in the response
    };
    return request(options);
  }

  return {
    search: search
  };
};
