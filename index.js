const TelegramApi = require("node-telegram-bot-api")

const token = "7384594714:AAFVAa_DpFuHEBznL8WOf5A2v4JWICYKj9E"

const bot = new TelegramApi(token, {polling: true})

bot.on('message', msg => {
    const text = msg.text;
    const chatid = msg.chat.id;

    if(text === "/start"){
        bot.sendMessage(chatid, "Добро пожаловать, " + msg.from.username + "! Нажми на кнопку ниже что бы продолжить.")
    
    }

    console.log(msg)
}) 
