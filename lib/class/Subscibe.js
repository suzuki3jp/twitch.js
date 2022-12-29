"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubGift = exports.Subscribe = void 0;
const Channel_1 = require("./Channel");
const Member_1 = require("./Member");
class Subscribe {
    client;
    /**
     * Subscribed channel.
     */
    channel;
    /**
     * The member that subscribed.
     */
    author;
    /**
     * The message content sent with subscribe.
     * This value will be null if nothing is sent.
     */
    subMessage;
    /**
     * The total number of subscribe months.
     */
    totalMonth;
    /**
     * The number of consecutive subscribe months.
     */
    streak;
    /**
     * The plan name of the subscribe.
     */
    planName;
    /**
     * Whether the subscibe is by Amazon Prime.
     */
    isPrime;
    constructor(client, channelName, subInfo, message) {
        if (!message.channelId)
            throw Error('CHANNEL_ID_IS_NOT_DEFINED');
        this.client = client;
        this.channel = new Channel_1.Channel(this.client, channelName, message.channelId);
        this.author = new Member_1.ChannelMember(this.client, message.userInfo);
        this.totalMonth = subInfo.months;
        this.streak = subInfo.streak ?? 1;
        this.subMessage = subInfo.message ?? null;
        this.planName = subInfo.planName;
        this.isPrime = subInfo.isPrime;
    }
}
exports.Subscribe = Subscribe;
class SubGift {
    client;
    /**
     * The channel to that subscribe was gifted.
     */
    channel;
    /**
     * The gifter that gifted the subscribe.
     */
    gifter;
    /**
     * The recipient of the gift.
     */
    recipient;
    /**
     * Whether the sub was "paid" for with Amazon Prime.
     */
    isPrime;
    /**
     * The plan id of the sub.
     */
    planId;
    /**
     * The plan name of the sub.
     */
    planName;
    constructor(client, channelName, giftInfo, message) {
        if (!message.channelId)
            throw new Error('SUBGIFT_CHANNELID_IS_NOT_DEFINED');
        this.client = client;
        this.channel = new Channel_1.Channel(this.client, channelName, message.channelId);
        this.gifter = new Member_1.ChannelGifter(this.client, message.userInfo, giftInfo);
        this.recipient = new Member_1.GiftRecipient(this.client, giftInfo.displayName, giftInfo.userId);
        this.isPrime = giftInfo.isPrime;
        this.planId = giftInfo.plan;
        this.planName = giftInfo.planName;
    }
}
exports.SubGift = SubGift;
//# sourceMappingURL=Subscibe.js.map