import type { ChatUser, ChatSubGiftInfo } from '@twurple/chat';
import type { HelixUser } from '@twurple/api';
import type { TwitchClient } from '../Client';
export declare class BaseUser {
    client: TwitchClient;
    /**
     * The id of the user.
     */
    id: string;
    constructor(client: TwitchClient, id: string);
    /**
     * Get infomation of the user.
     */
    getInfo(): Promise<HelixUser | null>;
}
export declare class User extends BaseUser {
    /**
     * The name of the user.
     */
    name: string;
    constructor(client: TwitchClient, userId: string, userName: string);
}
export declare class ChannelMember extends BaseUser {
    client: TwitchClient;
    /**
     * The name of the member.
     */
    name: string;
    /**
     * The display name of the member.
     */
    displayName: string;
    /**
     * The id of the member.
     */
    id: string;
    /**
     * Whether the member is mod.
     */
    isMod: boolean;
    /**
     * Whether the member is broadcaster.
     */
    isBroadCaster: boolean;
    /**
     * Whether the member is founder.
     */
    isFounder: boolean;
    /**
     * Whether the member is subscriber.
     */
    isSubscriber: boolean;
    /**
     * Whether the member is vip.
     */
    isVip: boolean;
    /**
     * Badges of the member.
     */
    badges: Map<string, string>;
    /**
     * Badge infomation of the member.
     */
    badgeInfo: Map<string, string>;
    /**
     * The color of the member.
     * May be null when not set.
     */
    color: string | null;
    constructor(client: TwitchClient, userInfo: ChatUser);
}
export declare class ChannelGifter extends ChannelMember {
    /**
     * The number of subscriptions the gifting user has already gifted in total.
     */
    giftCount: number | null;
    constructor(client: TwitchClient, userInfo: ChatUser, gifterInfo: ChatSubGiftInfo);
}
export declare class GiftRecipient extends BaseUser {
    client: TwitchClient;
    /**
     * The display name of the user.
     */
    displayName: string;
    /**
     * The id of the user.
     */
    id: string;
    constructor(client: TwitchClient, displayName: string, id: string);
}
