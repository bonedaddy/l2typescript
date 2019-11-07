# Notes

Various notes from the TypeScript-Handbook in the `docs` folder

## Examples

Some "example" nodejs typescript applications are in the `examples` folder. Don't expect anything useful.

## Project Configuration

* TypeScript uses a config file called `tsconfig.json` to manage a project's options.

Example config file
```json
{
    "compilerOptions":{
        "outDir": "./build",
        "allowJs": true,
        "target": "es6"
    },
    "include": [
        "./src/**/*"
    ]
}
```

explanation:

1. Read in any files it understands in the `src` directory (with `include`).
2. Accept JavaScript files as inputs (with `allowJs`).
3. Emit all of the output files in `built` (with `outDir`).
4. Translate newer JavaScript constructs down to an older version like ECMAScript 5 (using `target`).

You can then simply run `tsc` and everything will be taken care of

## Files

Similar to `.jsx` you can use `.tsx` for usnig JSX in TypeScript
