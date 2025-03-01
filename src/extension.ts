'use strict';

import * as vscode from 'vscode';
import * as path from "path";

const open = require('open');

export function activate(context: vscode.ExtensionContext) {
        
	let disposable = vscode.commands.registerCommand('extension.viewInBrowser', () => {
        var editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showWarningMessage('no active text editor!');
            return; 
        }
        const file = editor.document.fileName;
        
        const ext = path.extname(file);
        
        if (/^\.(html|htm|shtml|xhtml)$/.test(ext)) {
            open(`file:///${file}`);
        } else {
            vscode.window.showInformationMessage('support html file only!');
        }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
}