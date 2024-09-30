import ts, { ListFormat, NodeArray, factory } from 'typescript';
import { printNode, printNodeArray } from '../utils/printer';

const PATH = 'generatedFiles';
export function generateMainControllerFactoryUTest(name: string) {
    const root =[
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier("expect")
          )])
        ),
        factory.createStringLiteral("chai"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier("makeUsecaseController")
          )])
        ),
        factory.createStringLiteral("@/main/factories/controllers"),
        undefined
      ),
      factory.createExpressionStatement(factory.createCallExpression(
        factory.createIdentifier("describe"),
        undefined,
        [
          factory.createStringLiteral("Usecase Controller Factory"),
          factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createBlock(
              [factory.createExpressionStatement(factory.createCallExpression(
                factory.createIdentifier("it"),
                undefined,
                [
                  factory.createStringLiteral("should create a controller"),
                  factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                    factory.createBlock(
                      [
                        factory.createVariableStatement(
                          undefined,
                          factory.createVariableDeclarationList(
                            [factory.createVariableDeclaration(
                              factory.createIdentifier("controller"),
                              undefined,
                              undefined,
                              factory.createCallExpression(
                                factory.createIdentifier("makeUsecaseController"),
                                undefined,
                                []
                              )
                            )],
                            ts.NodeFlags.Const
                          )
                        ),
                        factory.createExpressionStatement(factory.createCallExpression(
                          factory.createPropertyAccessExpression(
                            factory.createPropertyAccessExpression(
                              factory.createPropertyAccessExpression(
                                factory.createCallExpression(
                                  factory.createIdentifier("expect"),
                                  undefined,
                                  [factory.createPropertyAccessExpression(
                                    factory.createIdentifier("controller"),
                                    factory.createIdentifier("handle")
                                  )]
                                ),
                                factory.createIdentifier("to")
                              ),
                              factory.createIdentifier("be")
                            ),
                            factory.createIdentifier("a")
                          ),
                          undefined,
                          [factory.createStringLiteral("function")]
                        ))
                      ],
                      true
                    )
                  )
                ]
              ))],
              true
            )
          )
        ]
      ))
    ];
    

    return printNodeArray(root, name + 'ControllerFactory'+'.spec', PATH);
}
