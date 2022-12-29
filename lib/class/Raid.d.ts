import type { ChatRaidInfo, UserNotice } from '@twurple/chat';
import type { TwitchClient } from '../Client';
import { Channel } from './Channel';
import { ChannelMember } from './Member';
export declare class Raid {
    client: TwitchClient;
    /**
     * The number of viewers joining with the raid.
     */
    viewers: number;
    /**
     * The member that raided.
     */
    member: ChannelMember;
    /**
     * The channel that was raided.
     */
    channel: Channel;
    constructor(client: TwitchClient, channelName: string, raidInfo: ChatRaidInfo, userInfo: UserNotice);
}
