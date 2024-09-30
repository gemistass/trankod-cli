import { AbstractAction } from '../actions/abstract.action';
import { Command } from 'commander';

export abstract class AbstractCommand {
  constructor(protected action: AbstractAction) {}

  public abstract load(program: Command): void;
}
