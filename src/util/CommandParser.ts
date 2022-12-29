export class CommandParser {
    public content: string;
    public commandName: string;
    public commandsArg: string[];
    public manageCommands: string[];

    constructor(content: string, options: CommandParseOptions) {
        const [name, ...args] = content.split(' ');
        this.content = content;
        this.commandName = name.replaceAll('！', '!').toLowerCase();
        this.commandsArg = args;
        this.manageCommands = options.manageCommands;
    }

    isCommand(): boolean {
        return this.commandName.startsWith('!');
    }

    isManageCommand(): boolean {
        return this.manageCommands.includes(this.commandName);
    }
}

export interface CommandParseOptions {
    manageCommands: string[];
}
