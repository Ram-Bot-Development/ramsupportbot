const { Client, GatewayIntentBits, Partials } = require("discord.js");
const ConsoleLog = require("../Funtions/log");
const { RamApiPro } = require("ram-api.js/Endpoints/pro");
const { proapi } = require("../Funtions/api");
const { bot } = require("../config");
const { Utils } = require("ram-api.js");
const helper = require("discord-helper.js")


class Bot extends Client {
    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildVoiceStates,

            ],
            partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User]
        })
    }
    start() {
        let helperclient = new helper.Client("Support", this);
let helperutils = new helper.Utils("discord-helper.js");
        this.on("ready", () => {
            new ConsoleLog("Bot").Ginfo("Ready!");

            this.user.setPresence({activities: [{ name: "Ram Support"}]})

            let tr = false;
            setInterval(async () => {
                let check = await (helperutils.checkipportAsync("192.198.80.26", 1068));

                if(check) {
                    if(tr) {
                        tr = false
                        helperutils.discordsendwebhookAsync("https://discord.com/api/webhooks/1080844209650683965/nQ_6i5PHQndA7X1x9ewNr5lKHu_ljbNh9bMhR9FC-crxfNmNJD9DwYRmB7z04A7xdh88", "<@&1080847483036508190> Ram bot is back online!" );

                    }
                } else {
                    if(!tr) {
                        tr = true
                        helperutils.discordsendwebhookAsync("https://discord.com/api/webhooks/1080844209650683965/nQ_6i5PHQndA7X1x9ewNr5lKHu_ljbNh9bMhR9FC-crxfNmNJD9DwYRmB7z04A7xdh88", "<@&1080847483036508190> Ram bot is offline!")
                    }
                }
            new proapi().version_infoAsync().then(data => {

                if(data.outdated) {
                    if(data.supported) {
                        new ConsoleLog("ram-api").Gwarn(`${data.version} is outdated but still supported latest ${data.latest}`)
                    } else {
                        new ConsoleLog("ram-api").Gerror(`${data.version} is outdated and no longer supported please update to ${data.latest}`)
                    }
                } else {
                    new ConsoleLog("ram-api").Ginfo("Ram Api Is up to date!")
                }


            });

            let data = await new Utils().packageVersionCheckAsync();

            if(data.outdated) {
               

                new ConsoleLog("ram-api.js").Gwarn(data.log)

                

              

            } else {
                new ConsoleLog("ram-api.js").Ginfo(data.log)
            }
            this.user.setPresence({activities: [{ name: "Ram Support"}]})
        }, 15000)

        

        })

       

        this.login(bot.token);
    }

    
}


module.exports = Bot;