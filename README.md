# Color Finder Microsoft Bot

## Overview

This is a chat bot using Microsoft Bot Framework that identifies color name from hex and hexcode from color name.

## Prerequisites

The minimum prerequisites to run this app are:
* Latest Node.js with NPM. Download it from [here](https://nodejs.org/en/download/).
* The Bot Framework Emulator. To install the Bot Framework Emulator, download it from [here](https://emulator.botframework.com/). Please refer to [this documentation article](https://github.com/microsoft/botframework-emulator/wiki/Getting-Started) to know more about the Bot Framework Emulator.

## Environment Configuration

| Key | How to get the key |
| ------------- | ------------- |
| BingSearchAPIKey |  https://azure.microsoft.com/en-us/try/cognitive-services/?api=bing-web-search-api |
| ComputerVisionAPIKey  | https://azure.microsoft.com/en-us/try/cognitive-services/my-apis/?api=computer-vision-api  |

### Load environment values

Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE

```
BingSearchAPIKey=BING_SEARCH_API_HERE
ComputerVisionAPIKey=COMPUTER_VISION_API_HERE
```

```
cp .env-sample .env
```

## Code Details

### Hex-Name Conversion
* This bot is looking for the pattern "find the name of #HEX" and "find the hex of COLORNAME".
* Extracts the HEX/COLOR NAME value
* Do lookup
* Return the result


### Computer Vision API Analysis
* This bot is looking for the pattern "what is the color of OBJECT".
* Extracts the OBJECT value
* Search using Bing Image Search API
* Get the first search result image
* Call Azure Cognitive Vision API to analyze the image with category "Color" and return the color

## Result

![img](https://thumbs.gfycat.com/AgedGentleGuineafowl-size_restricted.gif)
<!-- ![img](https://thumbs.gfycat.com/LonelyFancyJapanesebeetle-size_restricted.gif) -->

## Credits
- [tinycolor2](https://github.com/bgrins/TinyColor)
- [Brian Clark](https://twitter.com/_clarkio)

## Reference
- [Analyze an Image with Computer Vision API](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts/curl#AnalyzeImage)
- [Bing Image Search API](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference)
