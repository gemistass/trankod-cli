import { parseDocument } from 'yaml';
import { printYml } from '../utils/printer';

const PATH = 'generatedFiles';

export function generateYamlConfiguration(usecase: string) {
    const fileName = `${usecase}.yml`;

    const yml_str = `
    name: \${self:provider.stage}-\${self:provider.environment.version}-${usecase}Invocation
    handler: './src/main/lambdas/${usecase}InvocationLambda.handle'
    timeout: 30
    iamRoleStatementsName: ${usecase}InvocationLambdaRole
    iamRoleStatements:
        - Effect: 'Allow'
          Action:
              - dynamodb:UpdateItem
          Resource: 'arn:aws:dynamodb:\${self:provider.region}:\${aws:accountId}:table/\${self:provider.stage}-table'
    `;

    printYml(parseDocument(yml_str), fileName, PATH);
}
