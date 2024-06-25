# aontu-lsp
Aontu LSP

# How to install this extension for local testing:
- run `npm run package-extension` - this will generate a VSIX extension file in the project directory, called something like "aontu-lsp-0.0.1.vsix"
- follow the simple instructions for your platform on here: https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions
- reload VSCode - in the list of languages in the top right corner you should see "aontu" - select it
- now the syntax highlighting will apply to your code - it will differ based on the VSCode theme you are using

# How to test this extension without installing it:
- in VSCode, open this project directory via "Open Folder"
- press F5 - a new VSCode instance will pop up with "Extension Development Host" in the title
- in the list of languages in the top right corner you should see "aontu" - select it
- now the syntax highlighting will apply to your code - it will differ based on the VSCode theme you are using
