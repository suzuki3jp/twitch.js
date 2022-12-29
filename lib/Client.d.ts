/// <reference types="node" />
import { Message } from './class/Message';
import { SubGift, Subscribe } from './class/Subscibe';
import { Ban } from './class/Ban';
import { Raid } from './class/Raid';
import { EventEmitter } from 'events';
import { RefreshingAuthProvider } from '@twurple/auth';
import type { AccessToken } from '@twurple/auth';
import { ApiClient } from '@twurple/api';
import type { UserIdResolvable, HelixPrivilegedUser, HelixUser } from '@twurple/api';
import { ChatClient } from '@twurple/chat';
import type { PrivateMessage } from '@twurple/chat';
export declare class TwitchClient extends EventEmitter {
    /**
     * RefreshingAuthProvider from @twurple/auth.
     * {@link https://twurple.js.org/reference/auth/classes/RefreshingAuthProvider.html AuthProvider docs}
     */
    _auth: RefreshingAuthProvider;
    /**
     * ApiClient from @twurple/api.
     * {@link https://twurple.js.org/reference/api/classes/ApiClient.html ApiClient docs}
     */
    _api: ApiClient;
    /**
     * ChatClient from @twurple/chat.
     * {@link https://twurple.js.org/reference/chat/classes/ChatClient.html ChatClient docs}
     */
    _chat: ChatClient;
    on<K extends keyof ClientEvents>(events: K, listener: (...args: ClientEvents[K]) => void): this;
    constructor(authConfig: AuthConfig, options: ClientOptions);
    /**
     * Retrieve information about the logged-in user.
     */
    getMe(): Promise<HelixPrivilegedUser>;
    /**
     * Retrieve user information.
     */
    getUser(id: UserIdResolvable): Promise<HelixUser | null>;
    /**
     * Send a message.
     * @param channelName The name of the channel to that a message will be sent.
     * @param content The content of message to be sent.
     * @param replyTo The message of replying or the id of the message.
     */
    say(channelName: string, content: string, replyTo?: string | PrivateMessage): void;
    /**
     *
     */
    login(): Promise<void>;
}
export interface AuthConfig {
    clientId: string;
    clientSecret: string;
    accessToken: string;
    refreshToken: string;
    /**
     * This value is set to 0, if undefined.
     */
    expiresIn?: number;
    /**
     * This value is set to 0, if undefined.
     */
    obtainmentTimestamp?: number;
    onRefresh?: (tokenInfo: AccessToken) => void;
}
export interface ClientOptions {
    channels: string[];
}
export interface ClientEvents {
    ready: [];
    messageCreate: [message: Message];
    subCreate: [subscibe: Subscribe];
    subGiftCreate: [gift: SubGift];
    banCreate: [ban: Ban];
    raidCreate: [raid: Raid];
}
