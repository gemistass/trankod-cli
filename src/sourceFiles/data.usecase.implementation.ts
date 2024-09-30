import ts, { ListFormat, NodeArray, factory } from 'typescript';
import { printNode, printNodeArray } from '../utils/printer';

const PATH = 'generatedFiles';
export function generateUsecaseImplementation(name: string) {
    const root = [
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name + 'Repository')),
                ]),
            ),

            factory.createStringLiteral('@/data/protocols/db'),
            undefined,
        ),
        factory.createIdentifier('\n'),
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name)),
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name + 'Params')),
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name + 'Result')),
                ]),
            ),
            factory.createStringLiteral('@/domain/usecases'),
            undefined,
        ),
        factory.createIdentifier('\n'),
        factory.createClassDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Impl'),
            undefined,
            [
                factory.createHeritageClause(ts.SyntaxKind.ImplementsKeyword, [
                    factory.createExpressionWithTypeArguments(factory.createIdentifier(name), undefined),
                ]),
            ],
            [
                factory.createConstructorDeclaration(
                    undefined,
                    [
                        factory.createParameterDeclaration(
                            [
                                factory.createToken(ts.SyntaxKind.PrivateKeyword),
                                factory.createToken(ts.SyntaxKind.ReadonlyKeyword),
                            ],
                            undefined,
                            factory.createIdentifier(name + 'Repository'),
                            undefined,
                            factory.createTypeReferenceNode(factory.createIdentifier(name + 'Repository'), undefined),
                            undefined,
                        ),
                    ],
                    factory.createBlock([], false),
                    
                ),

                factory.createMethodDeclaration(
                    [factory.createToken(ts.SyntaxKind.AsyncKeyword)],
                    undefined,
                    factory.createIdentifier('get'),
                    undefined,
                    undefined,
                    [
                        factory.createParameterDeclaration(
                            undefined,
                            undefined,
                            factory.createIdentifier('data'),
                            undefined,
                            factory.createTypeReferenceNode(factory.createIdentifier(name + 'Params'), undefined),
                            undefined,
                        ),
                    ],
                    factory.createTypeReferenceNode(factory.createIdentifier('Promise'), [
                        factory.createTypeReferenceNode(factory.createIdentifier(name + 'Result'), undefined),
                    ]),
                    factory.createBlock(
                        [
                            factory.createReturnStatement(
                                factory.createAwaitExpression(
                                    factory.createCallExpression(
                                        factory.createPropertyAccessExpression(
                                            factory.createPropertyAccessExpression(
                                                factory.createThis(),
                                                factory.createIdentifier(name + 'Repository'),
                                            ),
                                            factory.createIdentifier('get'),
                                        ),
                                        undefined,
                                        [factory.createIdentifier('data')],
                                    ),
                                ),
                            ),
                        ],
                        true,
                    ),
                ),
            ],
        ),
    ];

    return printNodeArray(root, name + 'Impl', PATH);
}
