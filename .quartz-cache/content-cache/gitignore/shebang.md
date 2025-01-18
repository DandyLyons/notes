---
publish: true
wikipedia: https://en.wikipedia.org/wiki/Shebang_(Unix)
---
See [wikipedia](https://en.wikipedia.org/wiki/Shebang_(Unix)). 

In computing, a shebang is the character sequence #!, consisting of the characters number sign (also known as sharp or hash) and exclamation mark (also known as bang), at the beginning of a [[Scripting Languages|script]].

When a text file with a shebang is used as if it were an executable in a [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") operating system, the [program loader](https://en.wikipedia.org/wiki/Loader_(computing) "Loader (computing)") mechanism parses the rest of the file's initial line as an [interpreter directive](https://en.wikipedia.org/wiki/Interpreter_directive "Interpreter directive"). The loader executes the specified [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing) "Interpreter (computing)") program, passing to it as an argument the path that was initially used when attempting to run the script, so that the program may use the file as input data.[[8]](https://en.wikipedia.org/wiki/Shebang_(Unix)#cite_note-linux-8) For example, if a script is named with the path _path/to/script_, and it starts with the line `#!/bin/sh`, then the program loader is instructed to run the program _/bin/sh_, passing _path/to/script_ as the first argument.

## Syntax
The form of a shebang [interpreter directive](https://en.wikipedia.org/wiki/Interpreter_directive "Interpreter directive") is as follows:

```sh
#!_interpreter_ [_optional-arg_]
```

in which _interpreter_ is a [path](https://en.wikipedia.org/wiki/Path_(computing) "Path (computing)") to an executable program. The space between #! and _interpreter_ is optional. There could be any number of spaces or tabs either before or after _interpreter_. The _optional-arg_ will include any extra spaces up to the end-of-line.

## Notable Examples
Some typical shebang lines:

- `#!/bin/sh` – Execute the file using the [[Bourne Shell]], or a compatible shell, assumed to be in the /bin directory
- `#!/bin/bash` – Execute the file using the [[bash|Bash shell]]. 
	- See [[bash#shebang]]. 
- `#!/usr/bin/pwsh` – Execute the file using [PowerShell](https://en.wikipedia.org/wiki/PowerShell "PowerShell")
- `#!/usr/bin/env python3` – Execute with a [Python](https://en.wikipedia.org/wiki/Python_(programming_language) "Python (programming language)") interpreter, using the [env](https://en.wikipedia.org/wiki/Env "Env") program search path to find it
- `#!/bin/false` – Do nothing, but return a non-zero [exit status](https://en.wikipedia.org/wiki/Exit_status "Exit status"), indicating failure. Used to prevent stand-alone execution of a script file intended for execution in a specific context, such as by the `**.**` command from sh/bash, `source` from csh/tcsh, or as a .profile, .cshrc, or .login file.