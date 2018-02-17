var request = require('request-promise');

module.exports = function(config) {
  var apiKey = config && config.apiKey;
  if (!apiKey) throw new Error('API Key is required');

  function analyzeColor(imageUrl) {
    return postApi(imageUrl).then(function(result) {
      return result && result.color;
    });
  }

  function postApi(imageUrl) {
    console.log(imageUrl);
    var options = {
      method: 'POST',
      uri: `https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Color&language=en`,
      headers: {
        'Ocp-Apim-Subscription-Key': config.apiKey,
      },
      body: {
        'url': imageUrl
      },
      json: true
    };
    return request(options);
  }

  return {
    analyze: analyzeColor
  };
}
