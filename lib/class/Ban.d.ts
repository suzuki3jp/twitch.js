import type { TwitchClient } from '../Client';
import { User } from './Member';
import { Channel } from './Channel';
import type { ClearChat } from '@twurple/chat';
export declare class Ban {
    client: TwitchClient;
    /**
     * The channel that banned.
     */
    channel: Channel;
    /**
     * The user that banned.
     */
    user: User;
    /**
     * The date of was banned at.
     */
    bannedAt: Date;
    constructor(client: TwitchClient, userName: string, channelName: string, message: ClearChat);
}
