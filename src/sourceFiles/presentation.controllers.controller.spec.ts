import ts, { ListFormat, NodeArray, factory } from 'typescript';
import { printNode, printNodeArray } from '../utils/printer';

const PATH = 'generatedFiles';
export function generatePresentationControllerUTest(name: string) {
    const root =[
        factory.createExpressionStatement(factory.createCallExpression(
          factory.createIdentifier("describe"),
          undefined,
          [
            factory.createStringLiteral(name+" Controller"),
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
                    factory.createStringLiteral("should handle a request"),
                    factory.createArrowFunction(
                      [factory.createToken(ts.SyntaxKind.AsyncKeyword)],
                      undefined,
                      [],
                      undefined,
                      factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                      factory.createBlock(
                        [],
                        false
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
      

    return printNodeArray(root, name + 'Controller'+'.spec', PATH);
}
