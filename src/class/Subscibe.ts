import { Channel } from './Channel';
import { ChannelMember, ChannelGifter, GiftRecipient } from './Member';

import type { UserNotice, ChatSubInfo, ChatSubGiftInfo } from '@twurple/chat';
import { TwitchClient } from '../Client';

export class Subscribe {
    public client: TwitchClient;

    /**
     * Subscribed channel.
     */
    public channel: Channel;

    /**
     * The member that subscribed.
     */
    public author: ChannelMember;

    /**
     * The message content sent with subscribe.
     * This value will be null if nothing is sent.
     */
    public subMessage: string | null;

    /**
     * The total number of subscribe months.
     */
    public totalMonth: number;

    /**
     * The number of consecutive subscribe months.
     */
    public streak: number;

    /**
     * The plan name of the subscribe.
     */
    public planName: string;

    /**
     * Whether the subscibe is by Amazon Prime.
     */
    public isPrime: boolean;

    constructor(client: TwitchClient, channelName: string, subInfo: ChatSubInfo, message: UserNotice) {
        if (!message.channelId) throw Error('CHANNEL_ID_IS_NOT_DEFINED');
        this.client = client;
        this.channel = new Channel(this.client, channelName, message.channelId);
        this.author = new ChannelMember(this.client, message.userInfo);
        this.totalMonth = subInfo.months;
        this.streak = subInfo.streak ?? 1;
        this.subMessage = subInfo.message ?? null;
        this.planName = subInfo.planName;
        this.isPrime = subInfo.isPrime;
    }
}

export class SubGift {
    public client: TwitchClient;

    /**
     * The channel to that subscribe was gifted.
     */
    public channel: Channel;

    /**
     * The gifter that gifted the subscribe.
     */
    public gifter: ChannelGifter;

    /**
     * The recipient of the gift.
     */
    public recipient: GiftRecipient;

    /**
     * Whether the sub was "paid" for with Amazon Prime.
     */
    public isPrime: boolean;

    /**
     * The plan id of the sub.
     */
    public planId: string;

    /**
     * The plan name of the sub.
     */
    public planName: string;

    constructor(client: TwitchClient, channelName: string, giftInfo: ChatSubGiftInfo, message: UserNotice) {
        if (!message.channelId) throw new Error('SUBGIFT_CHANNELID_IS_NOT_DEFINED');
        this.client = client;
        this.channel = new Channel(this.client, channelName, message.channelId);
        this.gifter = new ChannelGifter(this.client, message.userInfo, giftInfo);
        this.recipient = new GiftRecipient(this.client, giftInfo.displayName, giftInfo.userId);
        this.isPrime = giftInfo.isPrime;
        this.planId = giftInfo.plan;
        this.planName = giftInfo.planName;
    }
}
