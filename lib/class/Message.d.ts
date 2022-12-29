import { Channel } from './Channel';
import { ChannelMember } from './Member';
import type { PrivateMessage } from '@twurple/chat';
import type { TwitchClient } from '../Client';
export declare class Message {
    client: TwitchClient;
    /**
     * The content of the message.
     */
    content: string;
    /**
     * The ID of the message.
     */
    id: string;
    /**
     * The date the message was sent at.
     */
    sentAt: Date;
    /**
     * The channel on that the message was sent.
     */
    channel: Channel;
    /**
     * The member that sent the message.
     */
    member: ChannelMember;
    constructor(client: TwitchClient, channelName: string, content: string, message: PrivateMessage);
    /**
     * Reply to the message.
     * @param content The content of reply message.
     */
    reply(content: string): void;
}
