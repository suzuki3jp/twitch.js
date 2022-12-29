import { Channel } from './Channel';
import { ChannelMember, ChannelGifter, GiftRecipient } from './Member';
import type { UserNotice, ChatSubInfo, ChatSubGiftInfo } from '@twurple/chat';
import { TwitchClient } from '../Client';
export declare class Subscribe {
    client: TwitchClient;
    /**
     * Subscribed channel.
     */
    channel: Channel;
    /**
     * The member that subscribed.
     */
    author: ChannelMember;
    /**
     * The message content sent with subscribe.
     * This value will be null if nothing is sent.
     */
    subMessage: string | null;
    /**
     * The total number of subscribe months.
     */
    totalMonth: number;
    /**
     * The number of consecutive subscribe months.
     */
    streak: number;
    /**
     * The plan name of the subscribe.
     */
    planName: string;
    /**
     * Whether the subscibe is by Amazon Prime.
     */
    isPrime: boolean;
    constructor(client: TwitchClient, channelName: string, subInfo: ChatSubInfo, message: UserNotice);
}
export declare class SubGift {
    client: TwitchClient;
    /**
     * The channel to that subscribe was gifted.
     */
    channel: Channel;
    /**
     * The gifter that gifted the subscribe.
     */
    gifter: ChannelGifter;
    /**
     * The recipient of the gift.
     */
    recipient: GiftRecipient;
    /**
     * Whether the sub was "paid" for with Amazon Prime.
     */
    isPrime: boolean;
    /**
     * The plan id of the sub.
     */
    planId: string;
    /**
     * The plan name of the sub.
     */
    planName: string;
    constructor(client: TwitchClient, channelName: string, giftInfo: ChatSubGiftInfo, message: UserNotice);
}
