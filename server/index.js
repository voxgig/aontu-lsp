const VSCLangServer = require('vscode-languageserver/node')

// NOTE: For reference, please see:
// https://github.com/microsoft/vscode-extension-samples/blob/main/lsp-sample/server/src/server.ts


const conn = VSCLangServer.createConnection(VSCLangServer.ProposedFeatures.all)
conn.listen()
conn.console.log('The language server is listening')
