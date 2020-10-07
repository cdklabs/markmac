# mdmacro

> Embed program outputs in markdown

Let's say I have a markdown file `test.md` which looks like this:

```test
# Hello, World

This is _just markdown_.

## Current date is:

<!-- <macro exec="date +%x"> -->
<!-- </macro> -->

## Current time is:

<!-- <macro exec="date +%R"> -->
<!-- </macro> -->
```

If I pipe it through `mdmacro`, the macro commands will be executed and their
STDOUT will be embedded between `<macro>` and `</macro>`.

```console
$ cat test.md | mdmacro
# Hello, World

This is _just markdown_.

## Current date is:

<!-- <macro exec="date +%x"> -->
10/07/2020
<!-- </macro> -->

## Current time is:

<!-- <macro exec="date +%R"> -->
15:48
<!-- </macro> -->
```

`mdmacro` searches for the `<macro>` directives inside your markdown file,
executes the command in `exec` and substitutes the contents between `<macro>`
and `</macro>` with STDOUT.

## Installation

This program is distributed via npm, so it can be installed through `yarn` or
`npm` or any other supporting client:

```shell
npm i -g mdmacro
```

## License

[Apache 2.0](./LICENSE)
