import type { TwitchClient } from '../Client';
import type { HelixChannel } from '@twurple/api';
export declare class Channel {
    client: TwitchClient;
    /**
     * The id of the channel.
     */
    id: string;
    /**
     * The name of the name.
     */
    name: string;
    constructor(client: TwitchClient, channelName: string, channelId: string);
    /**
     * Get the channel information.
     */
    getInfo(): Promise<HelixChannel | null>;
    /**
     * Send message to the channel.
     * @param content The content of send message.
     */
    send(content: string): void;
}
