"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raid = void 0;
const Channel_1 = require("./Channel");
const Member_1 = require("./Member");
class Raid {
    client;
    /**
     * The number of viewers joining with the raid.
     */
    viewers;
    /**
     * The member that raided.
     */
    member;
    /**
     * The channel that was raided.
     */
    channel;
    constructor(client, channelName, raidInfo, userInfo) {
        if (!userInfo.channelId)
            throw Error('CHANNELID_IS_NOT_DEFINED');
        this.client = client;
        this.viewers = raidInfo.viewerCount;
        this.member = new Member_1.ChannelMember(this.client, userInfo.userInfo);
        this.channel = new Channel_1.Channel(this.client, channelName, userInfo.channelId);
    }
}
exports.Raid = Raid;
//# sourceMappingURL=Raid.js.map