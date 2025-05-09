---
media_link: https://www.youtube.com/watch?v=JmrnE7HUaDE
---
## Problems with unstructured concurrency
[00:41](https://www.youtube.com/watch?t=41&v=JmrnE7HUaDE)

![[Screenshot 2024-10-02 at 3.07.54 PM.webp]]
- Structured tasks: 
	- Cancelled Automatically
	- Examples:
		- group tasks: `withTaskGroup` and `group.add`
		- `async-let` tasks
- Unstructured tasks: 
	- Must be cancelled manually
	- Should be avoided
	- Examples: 
		- `Task { }`
		- `Task.detached { }`

## Avoiding unstructured concurrency
[03:15](https://www.youtube.com/watch?t=195&v=JmrnE7HUaDE) 

### swift-service-lifecycle package
[03:28](https://www.youtube.com/watch?t=208&v=JmrnE7HUaDE)
- Instead of: [04:09](https://www.youtube.com/watch?t=249&v=JmrnE7HUaDE)
	-  ![[Screenshot 2024-10-02 at 3.14.17 PM.webp]]
- Use structured concurrency: [04:15](https://www.youtube.com/watch?t=255&v=JmrnE7HUaDE)
	- ![[Screenshot 2024-10-02 at 3.15.52 PM.webp]]
- swift-service-lifecycle 2.0: [04:34](https://www.youtube.com/watch?t=274&v=JmrnE7HUaDE)
	- Service Lifecycle is a Swift package designed to help server applications, also known as services, manage their startup and shutdown sequences.
	- adds **graceful shutdown**. 
	- built-in support for UNIX signals: [06:16](https://www.youtube.com/watch?t=376&v=JmrnE7HUaDE)
		- Kubernetes sends a SIGTERM command to tell a service to fail gracefully. 
			- If it doesn't fail gracefully, Kubernetes will send a SIGKILL and force the service to shutdown. 
- with-Style methods[10:16](https://www.youtube.com/watch?t=616&v=JmrnE7HUaDE): 
	- ![[Screenshot 2024-10-02 at 3.24.11 PM.webp]]
	- Common throughout the swift ecosystem: 
		- e.g. withTaskGroup()
	- when to use with-style methods: [11:45](https://www.youtube.com/watch?t=705&v=JmrnE7HUaDE)
		- provide scoped access to a resource
	- This pattern forces safe cleanup after using the resource:
		- ![[Screenshot 2024-10-02 at 3.27.23 PM.webp]]
	- ![[Screenshot 2024-10-02 at 3.33.58 PM.webp]]

## Composing it all together
[22:00](https://www.youtube.com/watch?t=1320&v=JmrnE7HUaDE)

## Conclusion
[28:17](https://www.youtube.com/watch?t=1697&v=JmrnE7HUaDE)
