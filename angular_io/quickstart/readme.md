Angular QuickStart with TypeScript
==================================

Installation and Setup
----------------------
0. Install pre-requisites (node, npm, nvm, TypeScript)
   See the TypeScript install notes.
1. Install Angular CLI
   `npm install -g @angular/cli`<sup>[1](#footnote01)</sup>
2. Create a new Angular project
   `ng new my-app --skip-git`<sup>[2](#footnote02)</sup>


Footnotes
---------
<a name="footnote01">1.</a> `-g` means to install into global context. `@angular/CLI` is the package name.  
<a name="footnote02">2.</a> By default, angular CLI wants to create its own git repo. It is likely that any project will already be inside 
a VCS so this is harmful. Use the `--skip-git` flag to prevent this.  
