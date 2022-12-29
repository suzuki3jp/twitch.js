"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
class Channel {
    client;
    /**
     * The id of the channel.
     */
    id;
    /**
     * The name of the name.
     */
    name;
    constructor(client, channelName, channelId) {
        this.client = client;
        this.name = channelName;
        this.id = channelId;
    }
    /**
     * Get the channel information.
     */
    async getInfo() {
        return await this.client._api.channels.getChannelInfoById(this.id);
    }
    /**
     * Send message to the channel.
     * @param content The content of send message.
     */
    send(content) {
        this.client.say(this.name, content);
    }
}
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map