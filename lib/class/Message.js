"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Channel_1 = require("./Channel");
const Member_1 = require("./Member");
class Message {
    client;
    /**
     * The content of the message.
     */
    content;
    /**
     * The ID of the message.
     */
    id;
    /**
     * The date the message was sent at.
     */
    sentAt;
    /**
     * The channel on that the message was sent.
     */
    channel;
    /**
     * The member that sent the message.
     */
    member;
    constructor(client, channelName, content, message) {
        if (!message.channelId)
            throw new Error('MESSAGE_CHANNELID_IS_NOT_DEFINED');
        this.client = client;
        this.content = content;
        this.id = message.id;
        this.sentAt = message.date;
        this.channel = new Channel_1.Channel(this.client, channelName, message.channelId);
        this.member = new Member_1.ChannelMember(this.client, message.userInfo);
    }
    /**
     * Reply to the message.
     * @param content The content of reply message.
     */
    reply(content) {
        this.client.say(this.channel.name, content, this.id);
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map