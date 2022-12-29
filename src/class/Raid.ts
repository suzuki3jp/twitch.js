import type { ChatRaidInfo, UserNotice } from '@twurple/chat';
import type { TwitchClient } from '../Client';
import { Channel } from './Channel';
import { ChannelMember } from './Member';

export class Raid {
    public client: TwitchClient;

    /**
     * The number of viewers joining with the raid.
     */
    public viewers: number;

    /**
     * The member that raided.
     */
    public member: ChannelMember;

    /**
     * The channel that was raided.
     */
    public channel: Channel;

    constructor(client: TwitchClient, channelName: string, raidInfo: ChatRaidInfo, userInfo: UserNotice) {
        if (!userInfo.channelId) throw Error('CHANNELID_IS_NOT_DEFINED');
        this.client = client;
        this.viewers = raidInfo.viewerCount;
        this.member = new ChannelMember(this.client, userInfo.userInfo);
        this.channel = new Channel(this.client, channelName, userInfo.channelId);
    }
}
