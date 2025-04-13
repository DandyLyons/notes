---
publish: true
media_link: https://www.youtube.com/watch?v=M1POAEPATFo
---

![Swift, Server-Side, Serverless - Sébastien Stormacq - YouTube](https://www.youtube.com/watch?v=M1POAEPATFo)
## Similar Talks
- https://www.youtube.com/watch?v=ZLL4_GnlGWI

## What is Serverless
[00:48](https://www.youtube.com/watch?t=48&v=M1POAEPATFo)
- it means you don't have to manage the server
- it scales with usage
- Built-in availability and fault tolerance
- pay for the value
	- pay only for what you use. 
- [[AWS Lambda]] is a serverless solution provided by [[Topics/Software Development/Web Development/Hosting/Amazon AWS/index|Amazon AWS]] 
	- [02:56](https://www.youtube.com/watch?t=176&v=M1POAEPATFo) lambda functions can be called with a REST API gateway, GraphQL, Database change, message queue, schedule or many other things. 

## How to set up a lambda function
[04:03](https://www.youtube.com/watch?t=243&v=M1POAEPATFo)

## How to deploy
[04:57](https://www.youtube.com/watch?t=297&v=M1POAEPATFo)
- You can deploy through the online console
- It's better to deploy using AWS CLI
- IAC: [[Infrastructure as Code]] 
- SAM: Serverless Application Model: [06:02](https://www.youtube.com/watch?t=362&v=M1POAEPATFo)
	- yaml file description of your infrastructure
	- `sam deploy` CLI command

## How much does it cost
[07:04](https://www.youtube.com/watch?t=424&v=M1POAEPATFo)
- Almost free to develop and test
- charged by ms of CPU time
- price per million requests
- generous free tier

---
## Deploy an Existing Web App on Lambda
[08:23](https://www.youtube.com/watch?t=503&v=M1POAEPATFo)
- ![[Screenshot 2024-10-04 at 5.11.51 PM.webp]]
- ![[Screenshot 2024-10-04 at 5.12.07 PM.webp]]
- Lambda runs on EC2 virtual machines
	- inside a MicroVM
- Vapor and Hummingbird provide a library that adapts your web app code to lambda
- But today I will be demonstrating a solution that is more generic that can be applied to any type of web app (Express, Java etc.)
	- To use this you must add 3 or 4 pieces
		- Must add an API gateway
		- lambda extension can intercept a lambda function call and convert it into an HTTP request that your web app can understand
		- Your web app must be put in a docker container
			- You only need to add one line to your docker file: 
				- `COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.6.4 /lambda-adapter jopt/extensions/lambda-adapter` 
		- This doesn't require any code change at all
		- ![[Screenshot 2024-10-04 at 5.18.44 PM.webp]]
		- Write a SAM template
			- ![[Screenshot 2024-10-04 at 5.20.55 PM.webp]]
			- You provide: 
				- the web app
				- the docker container
				- the SAM template yaml
			- SAM will generate: 
				- the API gateway
				- the AWS lambda function adapter around your web app
			- SAM CLI
				- `sam build`
				- `sam deploy`
	- see repo: github.com/awslabs/aws-lambda-web-adaptor

---
## How to write Lambda functions in Swift
[14:35](https://www.youtube.com/watch?t=875&v=M1POAEPATFo)
- AWS Lambda Custom Runtime: 
## Using swift-aws-lambda-runtime
- [17:57](https://www.youtube.com/watch?t=1077&v=M1POAEPATFo)
- add dependency: swift-aws-lambda-events:
	- provides various event triggers
- **Note**: the code in these slides could change. They are not API stable yet. 

## How to build and package?
[20:41](https://www.youtube.com/watch?t=1241&v=M1POAEPATFo)
![[Screenshot 2024-10-04 at 6.51.00 PM.webp]]
- `swift package --disable-sandbox archive` 
	- it will create a docker container with the swift runtime for amazon linux. compiles your code to a binary and create a zip file ready to deploy on lambda
- How do you deploy the zip file? [22:09](https://www.youtube.com/watch?t=1329&v=M1POAEPATFo)
	- You need to deploy more than just the zip file. you need the api gateway and other things
	- There are 2 plugins that can deploy to lambda: 
		- AWSLambdaPackager: 
			- developed by Apple
		- AWSLambdaDeployer: 
			- developed by sebastien stormacq
			- `swift package --disable-sandbox deploy` 
- AWSLambdaDeploymentDescriptor: 
	- Swift replacement for SAM

## Testing
- SAM local testing: 
	- [25:34](https://www.youtube.com/watch?t=1534&v=M1POAEPATFo)

---
## VS Code extension for Lambda Swift
[28:09](https://www.youtube.com/watch?t=1689&v=M1POAEPATFo)

