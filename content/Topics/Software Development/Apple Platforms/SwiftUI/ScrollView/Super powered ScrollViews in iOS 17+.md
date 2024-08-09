## Must reads
- [Paul Hudson - Easier scroll views in iOS 17+](https://youtu.be/l7eut-nYIUc?t=224)
- [Stewart Lynch - Enhancements to ScrollView in iOS 17](https://www.youtube.com/watch?v=8YHbhSmiKwU)

## `.scrollTargetBehavior`
Source: [How to make a ScrollView snap with paging or between child views - a free SwiftUI by Example tutorial](https://www.hackingwithswift.com/quick-start/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views)


```swift
struct ContentView: View {
    var body: some View {
        ScrollView(.horizontal) {
            LazyHStack {
                ForEach(0..<10) { i in
                    RoundedRectangle(cornerRadius: 25)
                        .fill(Color(hue: Double(i) / 10, saturation: 1, brightness: 1).gradient)
                        .frame(width: 300, height: 100)
                }
            }
            .scrollTargetLayout()
        }
        .scrollTargetBehavior(.viewAligned)
        .safeAreaPadding(.horizontal, 40)
    }
}
```
