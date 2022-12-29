import { Channel } from './Channel';
import { ChannelMember } from './Member';
import type { PrivateMessage } from '@twurple/chat';
import type { TwitchClient } from '../Client';

export class Message {
    public client: TwitchClient;

    /**
     * The content of the message.
     */
    public content: string;

    /**
     * The ID of the message.
     */
    public id: string;

    /**
     * The date the message was sent at.
     */
    public sentAt: Date;

    /**
     * The channel on that the message was sent.
     */
    public channel: Channel;

    /**
     * The member that sent the message.
     */
    public member: ChannelMember;

    constructor(client: TwitchClient, channelName: string, content: string, message: PrivateMessage) {
        if (!message.channelId) throw new Error('MESSAGE_CHANNELID_IS_NOT_DEFINED');
        this.client = client;
        this.content = content;
        this.id = message.id;
        this.sentAt = message.date;
        this.channel = new Channel(this.client, channelName, message.channelId);
        this.member = new ChannelMember(this.client, message.userInfo);
    }

    /**
     * Reply to the message.
     * @param content The content of reply message.
     */
    reply(content: string) {
        this.client.say(this.channel.name, content, this.id);
    }
}
