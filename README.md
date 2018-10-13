TypeScript Notes
================

\<transcribe paper notes here \>

Starting a TS Project
---------------------

- Optionally create a new project (just creates a standard tsconfig.json file in that directory).

```Bash
tsc --init
```

- Edit the tsconfig.json file to include preferred settings inside `"compilerOptions"`, e.g.:

```jsonc
{
 "compilerOptions": {
   "target": "es6",
   "strict": true,
   "outDir": "js"
 }
}
```

- Optionally create a subdirectory for the ts/js src files

```Bash
mkdir src
```

- Running `tsc` anywhere in the project will compile any TypeScript files in the project using the project's tsconfig file 
  (or the global defaults if no tsconfig.json is found).


Other
-----

- The TypeScript compiler will emit errors if multiple files in the project have the same global const name (even if none of 
  the files import or otherwise refer to eachother).
