
var restify = require('restify');
var builder = require('botbuilder');
var tinycolor = require('tinycolor2');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
  session.send("Say \"find name of #0000\" or \"find hex of green\"");
});

bot.dialog('sayColorName', function (session, args) {
    var hex = args.intent.matched[1].trim();
    console.log(hex);
    var color = tinycolor(hex);
    console.log(color);
    session.endDialog( color.isValid() ? 'Name of the color is "' + color.toName() + '"': "Couldn't find color name. Try again.");
}).triggerAction({ matches: /^find name of (.*)?/i });


bot.dialog('sayHex', function (session, args) {
    var name = args.intent.matched[1].trim();
    var color = tinycolor(name);
    session.endDialog(color.isValid() ? 'Hex of "' + name + '" is "' + color.toHexString() + '"' : "Couldn't find hex code. Try again.");
}).triggerAction({ matches: /^find hex of (.*)?/i });
