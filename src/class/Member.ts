import type { ChatUser, ChatSubGiftInfo } from '@twurple/chat';
import type { HelixUser } from '@twurple/api';
import type { TwitchClient } from '../Client';

export class BaseUser {
    public client: TwitchClient;

    /**
     * The id of the user.
     */
    public id: string;

    constructor(client: TwitchClient, id: string) {
        this.client = client;
        this.id = id;
    }

    /**
     * Get infomation of the user.
     */
    async getInfo(): Promise<HelixUser | null> {
        return await this.client.getUser(this.id);
    }
}

export class User extends BaseUser {
    /**
     * The name of the user.
     */
    public name: string;

    constructor(client: TwitchClient, userId: string, userName: string) {
        super(client, userId);
        this.name = userName;
    }
}

export class ChannelMember extends BaseUser {
    public client: TwitchClient;

    /**
     * The name of the member.
     */
    public name: string;

    /**
     * The display name of the member.
     */
    public displayName: string;

    /**
     * The id of the member.
     */
    public id: string;

    /**
     * Whether the member is mod.
     */
    public isMod: boolean;

    /**
     * Whether the member is broadcaster.
     */
    public isBroadCaster: boolean;

    /**
     * Whether the member is founder.
     */
    public isFounder: boolean;

    /**
     * Whether the member is subscriber.
     */
    public isSubscriber: boolean;

    /**
     * Whether the member is vip.
     */
    public isVip: boolean;

    /**
     * Badges of the member.
     */
    public badges: Map<string, string>;

    /**
     * Badge infomation of the member.
     */
    public badgeInfo: Map<string, string>;

    /**
     * The color of the member.
     * May be null when not set.
     */
    public color: string | null;

    constructor(client: TwitchClient, userInfo: ChatUser) {
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

export class ChannelGifter extends ChannelMember {
    /**
     * The number of subscriptions the gifting user has already gifted in total.
     */
    giftCount: number | null;

    constructor(client: TwitchClient, userInfo: ChatUser, gifterInfo: ChatSubGiftInfo) {
        super(client, userInfo);
        this.giftCount = gifterInfo.gifterGiftCount ?? null;
    }
}

export class GiftRecipient extends BaseUser {
    public client;

    /**
     * The display name of the user.
     */
    public displayName: string;

    /**
     * The id of the user.
     */
    public id: string;

    constructor(client: TwitchClient, displayName: string, id: string) {
        super(client, id);
        this.client = client;
        this.displayName = displayName;
        this.id = id;
    }
}
