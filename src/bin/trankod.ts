import { Command } from 'commander';
import { CommandLoader } from '../commands/command.loader';
import figlet from 'figlet';

const bootstrap = async () => {
    console.log(figlet.textSync('trunkod'));

    const program: Command = new Command();
    program
        .version('0.0.1')
        .usage('<command> [options]')
        .helpOption('-h, --help', 'Output usage information.')
        .option('-v, --verbose', 'verbosity that can be increased', test);

    await CommandLoader.load(program);

    program.parse(process.argv);
};

function test() {
    console.log('test');
}

bootstrap();
