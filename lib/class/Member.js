"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftRecipient = exports.ChannelGifter = exports.ChannelMember = exports.User = exports.BaseUser = void 0;
class BaseUser {
    client;
    /**
     * The id of the user.
     */
    id;
    constructor(client, id) {
        this.client = client;
        this.id = id;
    }
    /**
     * Get infomation of the user.
     */
    async getInfo() {
        return await this.client.getUser(this.id);
    }
}
exports.BaseUser = BaseUser;
class User extends BaseUser {
    /**
     * The name of the user.
     */
    name;
    constructor(client, userId, userName) {
        super(client, userId);
        this.name = userName;
    }
}
exports.User = User;
class ChannelMember extends BaseUser {
    client;
    /**
     * The name of the member.
     */
    name;
    /**
     * The display name of the member.
     */
    displayName;
    /**
     * The id of the member.
     */
    id;
    /**
     * Whether the member is mod.
     */
    isMod;
    /**
     * Whether the member is broadcaster.
     */
    isBroadCaster;
    /**
     * Whether the member is founder.
     */
    isFounder;
    /**
     * Whether the member is subscriber.
     */
    isSubscriber;
    /**
     * Whether the member is vip.
     */
    isVip;
    /**
     * Badges of the member.
     */
    badges;
    /**
     * Badge infomation of the member.
     */
    badgeInfo;
    /**
     * The color of the member.
     * May be null when not set.
     */
    color;
    constructor(client, userInfo) {
        super(client, userInfo.userId);
        this.client = client;
        this.id = userInfo.userId;
        this.name = userInfo.userName;
        this.displayName = userInfo.displayName;
        this.isMod = userInfo.isMod;
        this.isVip = userInfo.isVip;
        this.isBroadCaster = userInfo.isBroadcaster;
        this.isFounder = userInfo.isFounder;
        this.isSubscriber = userInfo.isSubscriber;
        this.badges = userInfo.badges;
        this.badgeInfo = userInfo.badgeInfo;
        this.color = userInfo.color ?? null;
    }
}
exports.ChannelMember = ChannelMember;
class ChannelGifter extends ChannelMember {
    /**
     * The number of subscriptions the gifting user has already gifted in total.
     */
    giftCount;
    constructor(client, userInfo, gifterInfo) {
        super(client, userInfo);
        this.giftCount = gifterInfo.gifterGiftCount ?? null;
    }
}
exports.ChannelGifter = ChannelGifter;
class GiftRecipient extends BaseUser {
    client;
    /**
     * The display name of the user.
     */
    displayName;
    /**
     * The id of the user.
     */
    id;
    constructor(client, displayName, id) {
        super(client, id);
        this.client = client;
        this.displayName = displayName;
        this.id = id;
    }
}
exports.GiftRecipient = GiftRecipient;
//# sourceMappingURL=Member.js.map