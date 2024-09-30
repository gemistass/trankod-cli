import ts, { factory } from 'typescript';

import { printNodeArray } from '../utils/printer';

const PATH = 'generatedFiles';
export function generateDataProtocolRepository(name: string) {
    const root = [
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name + 'Params')),
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name + 'Result')),
                ]),
            ),
            factory.createStringLiteral('@/domain/usecases'),
            undefined,
        ),
        factory.createIdentifier('\n'),
        factory.createInterfaceDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Repository'),
            undefined,
            undefined,
            [
                factory.createPropertySignature(
                    undefined,
                    factory.createIdentifier('delete'),
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
        factory.createIdentifier('\n'),
        factory.createTypeAliasDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Params'),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier(name + 'Params'), undefined),
        ),
        factory.createTypeAliasDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Result'),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier(name + 'Result'), undefined),
        ),
    ];

    return printNodeArray(root, name + 'Repository', PATH);
}
