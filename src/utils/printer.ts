import * as fs from 'fs';
import ts, { ListFormat, Node } from 'typescript';
import { Document } from 'yaml';

export function printNode(node: Node, usecaseName: string): string {
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    const sourceFile = ts.createSourceFile(
        usecaseName,
        '',
        ts.ScriptTarget.Latest,
        false, // setParentNodes
        ts.ScriptKind.TS,
    );

    fs.writeFile(sourceFile.fileName, printer.printNode(ts.EmitHint.Unspecified, node, sourceFile), function (err) {
        console.log(err);
    });

    return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}

export function printNodeArray(nodes: Node[], usecaseName: string, path: string): string {
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const sourceFile = ts.createSourceFile(
        usecaseName + '.ts',
        '',
        ts.ScriptTarget.Latest,
        false, // setParentNodes
        ts.ScriptKind.TS,
    );

    const noreArray = ts.factory.createNodeArray(nodes);

    const printedSourceFile = printer.printList(ListFormat.MultiLineBlockStatements, noreArray, sourceFile);

    fs.writeFile(`${path}/${sourceFile.fileName}`, printedSourceFile, function (err) {
        console.log(err);
    });

    return printer.printList(ListFormat.AllowTrailingComma, noreArray, sourceFile);
}

export function printYml(doc: Document, usecaseName: string, path: string): void {
    fs.writeFile(`${path}/${usecaseName}`, doc.toString(), function (err) {
        console.log(err);
    });
}
