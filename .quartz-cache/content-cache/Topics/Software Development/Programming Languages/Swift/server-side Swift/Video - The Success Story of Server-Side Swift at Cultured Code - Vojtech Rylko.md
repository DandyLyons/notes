---
publish: true
media_link: https://www.youtube.com/watch?v=oJArLZIQF8w
---
Video: [The Success Story of Server-Side Swift at Cultured Code - Vojtech Rylko - YouTube](https://www.youtube.com/watch?v=oJArLZIQF8w) 

## Old Architecture


## Current Modern Architecture
[06:36](https://www.youtube.com/watch?t=396&v=oJArLZIQF8w)

- [[Kubernetes]]
	- [[Docker]]
- Deployment
	- [[Amazon AWS]]: 
		- Swift interacts with AWS using Soto
	- Terraform: Infrastructure as code
- Logging: 
	- Fluent Bit
	- CloudWatch (AWS)
	- PagerDuty
	- Prometheus Metrics
- [[Topics/Software Development/Programming Languages/Swift/server-side Swift/Vapor/index|Vapor]]
	- which is built on top of [[Swift NIO]] 
- Database: 
	- Aurora: 
		- Swift interacts using MySQLKit
		- Offloaded database onto S3 AWS
	- Redis
		- Swift interop using Redistack
		- Used for ephemeral data such as push notifications
- Email input service: 
	- Things has a service where users can email and have it converted into a Todo in Things. 
	- Email triggers a **lambda function** (python), parsed using SQS, then passed to the Swift Vapor service. 
- Push notifications (APNS): 
	- 