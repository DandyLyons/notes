---
publish: true
---
[Xcode 13 Missing Info.plist](https://useyourloaf.com/blog/xcode-13-missing-info.plist/)
[Where is Info.plist in Xcode 13 | Sarunw](https://sarunw.com/posts/where-is-info-plist/)

## Version Numbers
In Project > Target > General > Identity: 


| Xcode GUI             | .plist key                   | valid chars        | Purpose                                                                  | Docs                                                                                                                           |
| --------------------- | ---------------------------- | ------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| "Version"             | `CFBundleShortVersionString` | numbers and period | The user visible version number visible in the App Store                 | [CFBundleShortVersionString](CFBundleShortVersionString)                                                                       |
| "Build"               | `CFBundleVersion`            | numbers and period | The build number. (Each version number will have multiple build numbers) | [CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleversion)         |
| "Bundle Display Name" | `CFBundleDisplayName`        |                    | The user visible name of the app.                                        | [CFBundleDisplayName](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundledisplayname) |
