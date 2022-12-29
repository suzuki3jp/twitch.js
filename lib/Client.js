"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitchClient = void 0;
const Message_1 = require("./class/Message");
const Subscibe_1 = require("./class/Subscibe");
const Ban_1 = require("./class/Ban");
const Raid_1 = require("./class/Raid");
const events_1 = require("events");
const auth_1 = require("@twurple/auth");
const api_1 = require("@twurple/api");
const chat_1 = require("@twurple/chat");
class TwitchClient extends events_1.EventEmitter {
    /**
     * RefreshingAuthProvider from @twurple/auth.
     * {@link https://twurple.js.org/reference/auth/classes/RefreshingAuthProvider.html AuthProvider docs}
     */
    _auth;
    /**
     * ApiClient from @twurple/api.
     * {@link https://twurple.js.org/reference/api/classes/ApiClient.html ApiClient docs}
     */
    _api;
    /**
     * ChatClient from @twurple/chat.
     * {@link https://twurple.js.org/reference/chat/classes/ChatClient.html ChatClient docs}
     */
    _chat;
    on(events, listener) {
        return super.on(events, listener);
    }
    constructor(authConfig, options) {
        super();
        const refreshConfig = {
            clientId: authConfig.clientId,
            clientSecret: authConfig.clientSecret,
            onRefresh: authConfig.onRefresh,
        };
        const accessToken = {
            accessToken: authConfig.accessToken,
            refreshToken: authConfig.refreshToken,
            expiresIn: authConfig.expiresIn ?? 0,
            obtainmentTimestamp: authConfig.obtainmentTimestamp ?? 0,
        };
        this._auth = new auth_1.RefreshingAuthProvider(refreshConfig, accessToken);
        this._chat = new chat_1.ChatClient({ authProvider: this._auth, channels: options.channels });
        this._api = new api_1.ApiClient({ authProvider: this._auth });
        /* ready */
        this._chat.onRegister(() => {
            super.emit(Events.Ready);
        });
        /* messageCreate */
        this._chat.onMessage((channelName, userName, content, msg) => {
            const message = new Message_1.Message(this, channelName, content, msg);
            super.emit(Events.MessageCreate, message);
        });
        /* subCreate */
        this._chat.onSub((channelName, userName, subInfo, msg) => {
            const sub = new Subscibe_1.Subscribe(this, channelName, subInfo, msg);
            super.emit(Events.SubCreate, sub);
        });
        /* subGiftCreate */
        this._chat.onSubGift((channelName, userName, subGiftInfo, msg) => {
            const subGift = new Subscibe_1.SubGift(this, channelName, subGiftInfo, msg);
            super.emit(Events.SubGiftCreate, subGift);
        });
        /* banCreate */
        this._chat.onBan((channelName, userName, msg) => {
            const ban = new Ban_1.Ban(this, userName, channelName, msg);
            super.emit(Events.BanCreate, ban);
        });
        this._chat.onRaid((channelName, userName, raidInfo, msg) => {
            const raid = new Raid_1.Raid(this, channelName, raidInfo, msg);
            super.emit(Events.raidCreate, raid);
        });
    }
    /**
     * Retrieve information about the logged-in user.
     */
    async getMe() {
        return await this._api.users.getMe();
    }
    /**
     * Retrieve user information.
     */
    async getUser(id) {
        return await this._api.users.getUserById(id);
    }
    /**
     * Send a message.
     * @param channelName The name of the channel to that a message will be sent.
     * @param content The content of message to be sent.
     * @param replyTo The message of replying or the id of the message.
     */
    say(channelName, content, replyTo) {
        this._chat.say(channelName, content, { replyTo });
    }
    /**
     *
     */
    async login() {
        await this._chat.connect();
    }
}
exports.TwitchClient = TwitchClient;
const Events = {
    Ready: 'ready',
    MessageCreate: 'messageCreate',
    SubCreate: 'subCreate',
    SubGiftCreate: 'subGiftCreate',
    BanCreate: 'banCreate',
    raidCreate: 'raidCreate',
};
//# sourceMappingURL=Client.js.map