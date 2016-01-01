module.exports.use = function(controller) {
  controller.hears('help', 'direct_mention', function(bot, message) {
    var botName = '@' + bot.identity.name
      , helpMessage;

    helpMessage = '' +
      'Once a stand up has started I\'ll ask each member of the team three status questions. ' +
      'Once all members have checked in, I\'ll end the stand up and then I\'ll post a summary to the summary channel. ' +
      'If the statuses are realllllly long, I\'ll break them up into multiple posts\n\n' +

      '_Running a stand up:_\n' +
      '`' + botName + ' start`: Start a stand up\n' +
      '`' + botName + ' end`: End an stand up in progress. This is only if you want to end early, stand ups will end on their own once everyone has reported.\n' +
      '`' + botName + ' report in #channel`: Set a channel for me to post stand up reports in. By default I\'ll use the channel the stand up started in.\n' +
      '`skip`: Use this during a stand up to skip a user.\n' +
      '\n' +
      '_Adding and removing members:_\n' +
      '`' + botName + ' members`: Lists the current members of the team.\n' +
      '`' + botName + ' join`: Adds you to the team.\n' +
      '`' + botName + ' leave`: Removes you from the team.\n' +
      '`' + botName + ' remove @user`: Removes another user from the team.\n' +
      '';

    bot.reply(message, helpMessage);
  });
};