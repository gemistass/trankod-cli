import { Command } from 'commander';
import { AbstractCommand } from './abstract.command';
import { Input } from './command.input';

export class NewCommand extends AbstractCommand {
    public load(program: Command): void {
        program
            .command('new <usecase>')
            // .allowUnknownOption()
            .description('Generate new usecase')
            .option('-v, --validator', 'Add validator')

            .usage('<usecase> [options] [usecase-specific-options]')
            .action(async (usecase: string, command: Command) => {
                console.log('DOING NEW COMMAND');
                const com = new Command().setOptionValue('asd', 'asd');

                // const options: Input[] = [];
                // options.push({
                //     name: 'dry-run',
                //     value: !!command.getOptionValue('dry-run'),
                // });
                // options.push({
                //     name: 'skip-install',
                //     value: command.getOptionValue('skip-install'),
                // });
                // options.push({
                //     name: 'project',
                //     value: command.getOptionValue('project'),
                // });

                // const inputs: Input[] = [];
                // inputs.push({ name: 'usecase', value: usecase });

                // const flags: string[] = [];

                // try {
                //     await this.action.handle(inputs, options, flags);
                // } catch (err) {
                //     process.exit(1);
                // }
                this.action.handle();
            });
    }
}
