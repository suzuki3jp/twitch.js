"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ban = void 0;
const Member_1 = require("./Member");
const Channel_1 = require("./Channel");
class Ban {
    client;
    /**
     * The channel that banned.
     */
    channel;
    /**
     * The user that banned.
     */
    user;
    /**
     * The date of was banned at.
     */
    bannedAt;
    constructor(client, userName, channelName, message) {
        if (!message.targetUserId)
            throw Error('BANNED_USER_ID_IS_NOT_DEFINED');
        this.client = client;
        this.channel = new Channel_1.Channel(this.client, channelName, message.channelId);
        this.user = new Member_1.User(this.client, message.targetUserId, userName);
        this.bannedAt = message.date;
    }
}
exports.Ban = Ban;
//# sourceMappingURL=Ban.js.map