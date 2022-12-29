"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandParser = void 0;
class CommandParser {
    content;
    commandName;
    commandsArg;
    manageCommands;
    constructor(content, options) {
        const [name, ...args] = content.split(' ');
        this.content = content;
        this.commandName = name.replaceAll('！', '!').toLowerCase();
        this.commandsArg = args;
        this.manageCommands = options.manageCommands;
    }
    isCommand() {
        return this.commandName.startsWith('!');
    }
    isManageCommand() {
        return this.manageCommands.includes(this.commandName);
    }
}
exports.CommandParser = CommandParser;
//# sourceMappingURL=CommandParser.js.map