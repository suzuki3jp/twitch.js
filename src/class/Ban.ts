import type { TwitchClient } from '../Client';
import { User } from './Member';
import { Channel } from './Channel';
import type { ClearChat } from '@twurple/chat';

export class Ban {
    public client: TwitchClient;

    /**
     * The channel that banned.
     */
    public channel: Channel;

    /**
     * The user that banned.
     */
    public user: User;

    /**
     * The date of was banned at.
     */
    bannedAt: Date;

    constructor(client: TwitchClient, userName: string, channelName: string, message: ClearChat) {
        if (!message.targetUserId) throw Error('BANNED_USER_ID_IS_NOT_DEFINED');
        this.client = client;
        this.channel = new Channel(this.client, channelName, message.channelId);
        this.user = new User(this.client, message.targetUserId, userName);
        this.bannedAt = message.date;
    }
}
