export declare class CommandParser {
    content: string;
    commandName: string;
    commandsArg: string[];
    manageCommands: string[];
    constructor(content: string, options: CommandParseOptions);
    isCommand(): boolean;
    isManageCommand(): boolean;
}
export interface CommandParseOptions {
    manageCommands: string[];
}
