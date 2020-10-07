# mdmacro

> Embed program outputs in markdown

Let's say I have a markdown file `README.md` which looks like this:

<!-- <macro exec="echo '```md' && cat README.md && echo '```'"> -->
```md
# mdmacro

> Embed program outputs in markdown

Let's say I have a markdown file `README.md` which looks like this:

<!-- <macro exec="echo '```md' && cat README.md && echo '```'"> -->

<!-- </macro> -->

If I pipe it through `mdmacro`, the macro commands will be executed and their
STDOUT will be embedded between `<macro>` and `</macro>`.

```shell
cat README.md | mdmacro > README.md
```
```
<!-- </macro> -->

If I pipe it through `mdmacro`, the macro commands will be executed and their
STDOUT will be embedded between `<macro>` and `</macro>`.

```shell
cat README.md | mdmacro > README.md
```
