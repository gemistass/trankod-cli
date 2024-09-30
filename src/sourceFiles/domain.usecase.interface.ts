import ts, { ListFormat, NodeArray, factory } from 'typescript';
import { printNode, printNodeArray } from '../utils/printer';

const PATH = 'generatedFiles';
export function generateDomainUsecaseInterface(name: string) {
    const root = [
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier('NoResponse')),
                ]),
            ),
            factory.createStringLiteral('@common/domain/models/helpers'),
            undefined,
        ),
        factory.createInterfaceDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name),
            undefined,
            undefined,
            [
                factory.createPropertySignature(
                    undefined,
                    factory.createIdentifier('do'),
                    undefined,
                    factory.createFunctionTypeNode(
                        undefined,
                        [
                            factory.createParameterDeclaration(
                                undefined,
                                undefined,
                                factory.createIdentifier('params'),
                                undefined,
                                factory.createTypeReferenceNode(factory.createIdentifier(name + 'Params'), undefined),
                                undefined,
                            ),
                        ],
                        factory.createTypeReferenceNode(factory.createIdentifier('Promise'), [
                            factory.createTypeReferenceNode(factory.createIdentifier(name + 'Result'), undefined),
                        ]),
                    ),
                ),
            ],
        ),
        factory.createTypeAliasDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Params'),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier('NoResponse'), undefined),
        ),
        factory.createTypeAliasDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Result'),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier('NoResponse'), undefined),
        ),
    ];

    return printNodeArray(root, name, PATH);
}
