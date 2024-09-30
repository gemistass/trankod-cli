import ts, { ListFormat, NodeArray, factory } from 'typescript';
import { printNode, printNodeArray } from '../utils/printer';

const PATH = 'generatedFiles';
export function generatePresentationController(name: string) {
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
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier('Validation')),
                ]),
            ),
            factory.createStringLiteral('@common/validation/protocols'),
            undefined,
        ),
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier('Controller')),
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier('HttpResponse')),
                ]),
            ),
            factory.createStringLiteral('@common/presentation/protocols'),
            undefined,
        ),
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier('ok')),
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier('toHttpResponse')),
                ]),
            ),
            factory.createStringLiteral('@common/presentation/helpers'),
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
                    factory.createImportSpecifier(false, undefined, factory.createIdentifier(name + 'DTO')),
                ]),
            ),
            factory.createStringLiteral('@/domain/usecases'),
            undefined,
        ),
        factory.createIdentifier('\n'),
        factory.createClassDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'Controller'),
            undefined,
            [
                factory.createHeritageClause(ts.SyntaxKind.ImplementsKeyword, [
                    factory.createExpressionWithTypeArguments(factory.createIdentifier('Controller'), [
                        factory.createTypeReferenceNode(
                            factory.createIdentifier(name + 'ControllerRequest'),
                            undefined,
                        ),
                        factory.createTypeReferenceNode(factory.createIdentifier('HttpResponse'), undefined),
                    ]),
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
                            factory.createIdentifier('validation'),
                            undefined,
                            factory.createTypeReferenceNode(factory.createIdentifier('Validation'), [
                                factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
                                factory.createTypeReferenceNode(
                                    factory.createIdentifier(name + 'ControllerRequest'),
                                    undefined,
                                ),
                            ]),
                            undefined,
                        ),
                        factory.createParameterDeclaration(
                            [
                                factory.createToken(ts.SyntaxKind.PrivateKeyword),
                                factory.createToken(ts.SyntaxKind.ReadonlyKeyword),
                            ],
                            undefined,
                            factory.createIdentifier(name),
                            undefined,
                            factory.createTypeReferenceNode(factory.createIdentifier(name), undefined),
                            undefined,
                        ),
                    ],
                    factory.createBlock([], false),
                ),
                factory.createMethodDeclaration(
                    [factory.createToken(ts.SyntaxKind.AsyncKeyword)],
                    undefined,
                    factory.createIdentifier('handle'),
                    undefined,
                    undefined,
                    [
                        factory.createParameterDeclaration(
                            undefined,
                            undefined,
                            factory.createIdentifier('request'),
                            undefined,
                            factory.createTypeReferenceNode(
                                factory.createIdentifier(name + 'ControllerRequest'),
                                undefined,
                            ),
                            undefined,
                        ),
                    ],
                    factory.createTypeReferenceNode(factory.createIdentifier('Promise'), [
                        factory.createTypeReferenceNode(factory.createIdentifier('HttpResponse'), undefined),
                    ]),
                    factory.createBlock(
                        [
                            factory.createExpressionStatement(
                                factory.createCallExpression(
                                    factory.createPropertyAccessExpression(
                                        factory.createIdentifier('console'),
                                        factory.createIdentifier('debug'),
                                        
                                    ),
                                    undefined,
                                    [
                                        factory.createStringLiteral('Handling request: '),
                                        factory.createIdentifier('request'),
                                        
                                    ],
                                ),
                            ),
                            
                            factory.createTryStatement(
                                factory.createBlock(
                                    [
                                        factory.createVariableStatement(
                                            undefined,
                                            factory.createVariableDeclarationList(
                                                [
                                                    factory.createVariableDeclaration(
                                                        factory.createIdentifier('validatedRequestBody'),
                                                        undefined,
                                                        undefined,
                                                        factory.createCallExpression(
                                                            factory.createPropertyAccessExpression(
                                                                factory.createPropertyAccessExpression(
                                                                    factory.createThis(),
                                                                    factory.createIdentifier('validation'),
                                                                ),
                                                                factory.createIdentifier('validateSchema'),
                                                            ),
                                                            undefined,
                                                            [factory.createIdentifier('request')],
                                                        ),
                                                    ),
                                                ],
                                                ts.NodeFlags.Const,
                                            ),
                                        ),
                                        factory.createExpressionStatement(
                                            factory.createAwaitExpression(
                                                factory.createCallExpression(
                                                    factory.createPropertyAccessExpression(
                                                        factory.createPropertyAccessExpression(
                                                            factory.createThis(),
                                                            factory.createIdentifier(name),
                                                        ),
                                                        factory.createIdentifier('do'),
                                                    ),
                                                    undefined,
                                                    [factory.createIdentifier('validatedRequestBody')],
                                                ),
                                            ),
                                        ),
                                        factory.createReturnStatement(
                                            factory.createCallExpression(factory.createIdentifier('ok'), undefined, []),
                                        ),
                                    ],
                                    true,
                                ),
                                factory.createCatchClause(
                                    factory.createVariableDeclaration(
                                        factory.createIdentifier('error'),
                                        undefined,
                                        undefined,
                                        undefined,
                                    ),
                                    factory.createBlock(
                                        [
                                            factory.createReturnStatement(
                                                factory.createCallExpression(
                                                    factory.createIdentifier('toHttpResponse'),
                                                    undefined,
                                                    [
                                                        factory.createAsExpression(
                                                            factory.createIdentifier('error'),
                                                            factory.createTypeReferenceNode(
                                                                factory.createIdentifier('Error'),
                                                                undefined,
                                                            ),
                                                        ),
                                                    ],
                                                ),
                                            ),
                                        ],
                                        true,
                                    ),
                                ),
                                undefined,
                            ),
                        ],
                        true,
                    ),
                ),
            ],
        ),
        factory.createIdentifier('\n'),
        factory.createTypeAliasDeclaration(
            [factory.createToken(ts.SyntaxKind.ExportKeyword)],
            factory.createIdentifier(name + 'ControllerRequest'),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier('NoResponse'), undefined),
        ),
    ];

    return printNodeArray(root, name + 'Controller', PATH);
}
