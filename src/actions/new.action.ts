import { Input } from '../commands/command.input';
import { generateDataProtocolInterface } from '../sourceFiles/data.protocol.interface';
import { generateDataProtocolRepository } from '../sourceFiles/data.protocol.repository';
import { generateInfraDynamoRepositoryUnitTest as generateInfraDynamoRepositoryUTest } from '../sourceFiles/data.protocol.repository.spec';
import { generateUsecaseImplementation } from '../sourceFiles/data.usecase.implementation';
import { generateUsecaseImplementationUnitTest as generateUsecaseImplementationUTest } from '../sourceFiles/data.usecase.implementation.spec';
import { generateDomainUsecaseInterface } from '../sourceFiles/domain.usecase.interface';
import { generateMainControllerFactory } from '../sourceFiles/main.factories.controller';
import { generateMainControllerFactoryUTest } from '../sourceFiles/main.factories.controller.spec.';
import { generateMainValidatorFactory } from '../sourceFiles/main.factories.controllers.validator';
import { generateMainImplFactory } from '../sourceFiles/main.factories.usecase';
import { generateMainInvocationLambda } from '../sourceFiles/main.lambdas.lambda';
import { generatePresentationController } from '../sourceFiles/presentation.controllers.controller';
import { generatePresentationControllerUTest } from '../sourceFiles/presentation.controllers.controller.spec';
import { generateYamlConfiguration } from '../sourceFiles/serverless.function.config';
import { AbstractAction } from './abstract.action';

const USECASE_NAME = 'Usecase';
export class NewAction extends AbstractAction {
    public async handle(inputs: Input[], options: Input[], extraFlags: string[]) {
        console.log('🚀 ~ file: add.action.ts:10 ~ NewAction ~ inputs:', inputs);
        console.log('🚀 ~ file: add.action.ts:10 ~ NewAction ~ options:', options);
        console.log('🚀 ~ file: add.action.ts:10 ~ NewAction ~ extraFlags:', extraFlags);

        generateDomainUsecaseInterface(USECASE_NAME);
        generateDataProtocolInterface(USECASE_NAME);

        generateUsecaseImplementation(USECASE_NAME);
        generateMainImplFactory(USECASE_NAME);

        generateUsecaseImplementationUTest(USECASE_NAME);

        generateDataProtocolRepository(USECASE_NAME);
        generateInfraDynamoRepositoryUTest(USECASE_NAME);

        generatePresentationController(USECASE_NAME);
        generateMainValidatorFactory(USECASE_NAME);
        generatePresentationControllerUTest(USECASE_NAME);
        generateMainControllerFactoryUTest(USECASE_NAME);

        generateMainInvocationLambda(USECASE_NAME);
        generateMainControllerFactory(USECASE_NAME);

        generateYamlConfiguration(USECASE_NAME);
    }
}
