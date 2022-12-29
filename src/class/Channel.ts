import type { TwitchClient } from '../Client';
import type { HelixChannel } from '@twurple/api';

export class Channel {
    public client: TwitchClient;

    /**
     * The id of the channel.
     */
    public id: string;

    /**
     * The name of the name.
     */
    public name: string;

    constructor(client: TwitchClient, channelName: string, channelId: string) {
        this.client = client;
        this.name = channelName;
        this.id = channelId;
    }

    /**
     * Get the channel information.
     */
    async getInfo(): Promise<HelixChannel | null> {
        return await this.client._api.channels.getChannelInfoById(this.id);
    }

    /**
     * Send message to the channel.
     * @param content The content of send message.
     */
    send(content: string) {
        this.client.say(this.name, content);
    }
}
