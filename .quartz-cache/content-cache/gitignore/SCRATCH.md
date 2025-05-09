## Feature Overview

[](https://github.com/swiftlang/swift-subprocess#feature-overview)

### Run and Asynchonously Collect Output

[](https://github.com/swiftlang/swift-subprocess#run-and-asynchonously-collect-output)

The easiest way to spawn a process with `Subprocess` is to simply run it and await its `CollectedResult`:

```swift
import Subprocess

let result = try await run(.name("ls"))

print(result.processIdentifier) // prints 1234
print(result.terminationStatus) // prints exited(0)

print(result.standardOutput) // prints LICENSE Package.swift ...
```

### Run with Custom Closure

[](https://github.com/swiftlang/swift-subprocess#run-with-custom-closure)

To have more precise control over input and output, you can provide a custom closure that executes while the child process is active. Inside this closure, you have the ability to manage the subprocess’s state (like suspending or terminating it) and stream its standard output and standard error as an `AsyncSequence`:

```swift
import Subprocess

let result = try await run(
    .path("/bin/dd"),
    arguments: ["if=/path/to/document"]
) { execution in
    var contents = ""
    for try await chunk in execution.standardOutput {
        let string = chunk.withUnsafeBytes { String(decoding: $0, as: UTF8.self) }
        contents += string
        if string == "Done" {
            // Stop execution
            await execution.teardown(
                using: [
                    .gracefulShutDown(
                        allowedDurationToNextStep: .seconds(0.5)
                    )
                ]
            )
            return contents
        }
    }
    return contents
}
```

### Running Unmonitored Processes

[](https://github.com/swiftlang/swift-subprocess#running-unmonitored-processes)

While `Subprocess` is designed with Swift’s structural concurrency in mind, it also provides a lower level, synchronous method for launching child processes. However, since `Subprocess` can’t synchronously monitor child process’s state or handle cleanup, you’ll need to attach a FileDescriptor to each I/O directly. Remember to close the `FileDescriptor` once you’re finished.

```swift
import Subprocess

let input: FileDescriptor = ...

input.closeAfter {
    let pid = try runDetached(.path("/bin/daemon"), input: input)
    // ... other opeartions
}
```

### Customizable Execution

[](https://github.com/swiftlang/swift-subprocess#customizable-execution)

You can set various parameters when running the child process, such as `Arguments`, `Environment`, and working directory:

```swift
import Subprocess

let result = try await run(
    .path("/bin/ls"),
    arguments: ["-a"],
    // Inherit the environment values from parent process and
    // add `NewKey=NewValue` 
    environment: .inherit.updating(["NewKey": "NewValue"]),
    workingDirectory: "/Users/",
)
```

### Platform Specific Options and “Escape Hatches”

[](https://github.com/swiftlang/swift-subprocess#platform-specific-options-and-escape-hatches)

`Subprocess` provides **platform-specific** configuration options, like setting `uid` and `gid` on Unix and adjusting window style on Windows, through the `PlatformOptions` struct. Check out the `PlatformOptions` documentation for a complete list of configurable parameters across different platforms.

`PlatformOptions` also allows access to platform-specific spawning constructs and customizations via a closure.

```swift
import Darwin
import Subprocess

var platformOptions = PlatformOptions()
let intendedWorkingDir = "/path/to/directory"
platformOptions.preSpawnProcessConfigurator = { spawnAttr, fileAttr in
    // Set POSIX_SPAWN_SETSID flag, which implies calls
    // to setsid
    var flags: Int16 = 0
    posix_spawnattr_getflags(&spawnAttr, &flags)
    posix_spawnattr_setflags(&spawnAttr, flags | Int16(POSIX_SPAWN_SETSID))

    // Change the working directory
    intendedWorkingDir.withCString { path in
        _ = posix_spawn_file_actions_addchdir_np(&fileAttr, path)
    }
}

let result = try await run(.path("/bin/exe"), platformOptions: platformOptions)
```

### Flexible Input and Output Configurations

[](https://github.com/swiftlang/swift-subprocess#flexible-input-and-output-configurations)

By default, `Subprocess`:

- Doesn’t send any input to the child process’s standard input
- Captures the child process’s standard output as a `String`, up to 128kB
- Ignores the child process’s standard error

You can tailor how `Subprocess` handles the standard input, standard output, and standard error by setting the `input`, `output`, and `error` parameters:

```swift
let content = "Hello Subprocess"

// Send "Hello Subprocess" to the standard input of `cat`
let result = try await run(.name("cat"), input: .string(content, using: UTF8.self))

// Collect both standard error and standard output as Data
let result = try await run(.name("cat"), output: .data, error: .data)
```

`Subprocess` supports these input options:

#### `NoInput`

[](https://github.com/swiftlang/swift-subprocess#noinput)

This option means no input is sent to the subprocess.

Use it by setting `.none` for `input`.

#### `FileDescriptorInput`

[](https://github.com/swiftlang/swift-subprocess#filedescriptorinput)

This option reads input from a specified `FileDescriptor`. If `closeAfterSpawningProcess` is set to `true`, the subprocess will close the file descriptor after spawning. If `false`, you are responsible for closing it, even if the subprocess fails to spawn.

Use it by setting `.fileDescriptor(closeAfterSpawningProcess:)` for `input`.

#### `StringInput`

[](https://github.com/swiftlang/swift-subprocess#stringinput)

This option reads input from a type conforming to `StringProtocol` using the specified encoding.

Use it by setting `.string(using:)` for `input`.

#### `ArrayInput`

[](https://github.com/swiftlang/swift-subprocess#arrayinput)

This option reads input from an array of `UInt8`.

Use it by setting `.array` for `input`.

#### `DataInput` (available with `SubprocessFoundation` trait)

[](https://github.com/swiftlang/swift-subprocess#datainput-available-with-subprocessfoundation-trait)

This option reads input from a given `Data`.

Use it by setting `.data` for `input`.

#### `DataSequenceInput` (available with `SubprocessFoundation` trait)

[](https://github.com/swiftlang/swift-subprocess#datasequenceinput-available-with-subprocessfoundation-trait)

This option reads input from a sequence of `Data`.

Use it by setting `.sequence` for `input`.

#### `DataAsyncSequenceInput` (available with `SubprocessFoundation` trait)

[](https://github.com/swiftlang/swift-subprocess#dataasyncsequenceinput-available-with-subprocessfoundation-trait)

This option reads input from an async sequence of `Data`.

Use it by setting `.asyncSequence` for `input`.

---

`Subprocess` also supports these output options:

#### `DiscardedOutput`

[](https://github.com/swiftlang/swift-subprocess#discardedoutput)

This option means the `Subprocess` won’t collect or redirect output from the child process.

Use it by setting `.discarded` for `input` or `error`.

#### `FileDescriptorOutput`

[](https://github.com/swiftlang/swift-subprocess#filedescriptoroutput)

This option writes output to a specified `FileDescriptor`. You can choose to have the `Subprocess` close the file descriptor after spawning.

Use it by setting `.fileDescriptor(closeAfterSpawningProcess:)` for `input` or `error`.

#### `StringOutput`

[](https://github.com/swiftlang/swift-subprocess#stringoutput)

This option collects output as a `String` with the given encoding.

Use it by setting `.string` or `.string(limit:encoding:)` for `input` or `error`.

#### `BytesOutput`

[](https://github.com/swiftlang/swift-subprocess#bytesoutput)

This option collects output as `[UInt8]`.

Use it by setting `.bytes` or `.bytes(limit:)` for `input` or `error`.

#### `SequenceOutput`:

[](https://github.com/swiftlang/swift-subprocess#sequenceoutput)

This option redirects the child output to the `.standardOutput` or `.standardError` property of `Execution`. It’s only for the `run()` family that takes a custom closure.