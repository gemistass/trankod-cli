import { NewAction } from '../actions/new.action';
import { ERROR_PREFIX } from '../ui/prefixes';
import chalk from 'chalk';
import { Command } from 'commander';
import { NewCommand } from './new.command';

export class CommandLoader {
    public static async load(program: Command): Promise<void> {
        new NewCommand(new NewAction()).load(program);
        CommandLoader.handleInvalidCommand(program);
    }

    private static handleInvalidCommand(program: Command) {
        program.on('command:*', () => {
            program.outputHelp();
            console.error(`\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`, program.args.join(' '));
            console.log(`See ${chalk.red('--help')} for a list of available commands.\n`);
            process.exit(1);
        });
    }
}
