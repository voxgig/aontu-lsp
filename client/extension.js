// The module 'vscode' contains the VS Code extensibility API
const VSCode = require('vscode')
const VSCLangClient = require('vscode-languageclient/node')
const Path = require('path')


// NOTE: For reference, please see:
// https://github.com/microsoft/vscode-extension-samples/blob/main/lsp-sample/client/src/extension.ts


let client

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
/**
 * @param {VSCode.ExtensionContext} ctx
 */
function activate(ctx) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	console.log('qwerty qwerty')
	VSCode.window.showInformationMessage('Hello QWERTY Activating...')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = VSCode.commands.registerCommand('extension.helloWorld', () => {
		const server_path = ctx.asAbsolutePath('../server/index.js')

		// If the extension is launched in debug mode then the debug server options are used
		// Otherwise the run options are used
		const server_opts = {
			run: { module: server_path, transport: VSCLangClient.TransportKind.ipc },
			debug: {
				module: server_path,
				transport: VSCLangClient.TransportKind.ipc,
			}
		}

		// Options to control the language client
		const client_opts = {
			// Register the server for plain text documents
			documentSelector: [{ scheme: 'file', language: 'plaintext' }],
			synchronize: {
				// Notify the server about file changes to '.clientrc files contained in the workspace
				fileEvents: VSCode.workspace.createFileSystemWatcher('**/.clientrc')
			}
		}

		client = new VSCLangClient.LanguageClient(
			'languageServerExample',
			'Language Server Example',
			server_opts,
			client_opts
		)

		client.start()

		// Display a message box to the user
		VSCode.window.showInformationMessage('Hello QWERTY')
	})

	ctx.subscriptions.push(disposable)
}


// this method is called when your extension is deactivated
function deactivate() {
	if (client) client.stop()
}


// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
