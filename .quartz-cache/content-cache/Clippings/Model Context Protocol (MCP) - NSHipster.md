---
title: Model Context Protocol (MCP)
author:
  - "[[Mattt]]"
contentPublished: 2025-03-07
noteCreated: 2025-03-17
tags:
  - clippings
  - article
description: Language Server Protocol (LSP) revolutionized how programming languages integrate with developer tools. Model Context Protocol (MCP) aims to do the same for a new generation of AI tools.
takeaways: 
Status: ✅ Read
url: https://nshipster.com/model-context-protocol/
subjects:
  - "[[Model Context Protocol]]"
---
**Original URL**: https://nshipster.com/model-context-protocol/
## Highlights
Language Server Protocol (LSP) revolutionized how programming languages integrate with developer tools. Model Context Protocol (MCP) aims to do the same for a new generation of AI tools.

But before we lay our scene of two protocols (both alike in dignity), let’s take a moment to motivate the problem a bit more.

## Tool Use & Agents

Today’s frontier models are extraordinary. But they’re limited in two key ways:

1. They don’t know anything outside their training data
2. They can’t do anything outside of predicting the next token

To their credit, LLMs *(kinda, sorta)* understand these limitations, and have been trained to ask for what they need. We (humans) have settled on a practice called tool use that lets AI do just that.

Here’s an example:

User

Write a limerick about today's weather in Portland, Oregon.

Client, to Assistant →

Also, there's this "Get Weather" tool available if you need it. It takes a set of coordinates and returns the current temperature and conditions.

Assistant

`<thinking>` *To write an accurate poem, I should get the weather. From my training, I know Portland's coordinates to be 45.5155° N, 122.6789° W* `</thinking>`

Tool call: `{tool: "Get Weather", latitude: 45.5155, longitude: -122.6789}`

← Client, to User

Is it alright to make that tool call?

User

👍

Client, to Assistant →

Tool result: `{temperature: 12, conditions: 'cloudy', humidity: 85%}`

Assistant

Here's your limerick about Portland's weather:

> There once was a city called Portland  
> Where clouds made the skies quite importland  
> At twelve degrees C  
> It's as gray as can be  
> With a dampness that's truly absorbland!  

Pretty clever, right?  
But then again, *so what?*

On its face, this is a very slow, expensive way to do something better-served by a quick Google search — or sticking your head out a window, for that matter.

But here’s the thing:  
**Tool use gives rise to agency** (✨𝓮𝓶𝓮𝓻𝓰𝓮𝓷𝓬𝓮✨)

As the saying goes, Quantity has a quality all its own. Give a language model a dozen… a hundred… a thousand tools — hell, give it *a tool for making more tools*. How confident are you that you could find a problem that couldn’t be solved by such a system?

We’re only just starting to see what’s possible.

---

But back to more practical matters:  
Let’s talk about where we are today with Model Context Protocol.

---

## The New M × N Problem

We’ve [written previously](https://nshipster.com/language-server-protocol) about Language Server Protocol, and the M × N problem. LSP’s challenge was connecting `M` editors with `N` programming languages MCP faces a similar challenge, of connecting `M` clients with `N` resources. Without MCP, each AI application must implement custom integrations for every data source it wants to access.

This creates the same kind of fragmented ecosystem that plagued development tools before LSP:

- Some AI applications offer deep integration with specific data sources but limited support for others
- Different applications implement similar integrations in incompatible ways
- Improvements to one integration rarely benefit the broader ecosystem

Like LSP, MCP transforms this M × N problem into an M + N problem through standardization. Rather than each AI application implementing custom integrations, it only needs to support the MCP standard. In doing so, it gains access to all MCP-compatible data sources and tools 🌈

## How Model Context Protocol Works

MCP follows a client-server architecture similar to LSP:

- The *client* is typically an AI application or development environment  
For example, [Claude Desktop](https://claude.ai/download), [Zed](https://zed.dev/), and [Cursor](https://www.cursor.com/).
- The *server* is a program that provides access to data and/or tools

Requests and responses are encoded according to the [JSON-RPC](https://www.jsonrpc.org/) 2.0 specification. Communication between client and server happens over Stdio (`stdin`/`stdout`) or HTTP with Server-Sent Events [transports](https://modelcontextprotocol.io/docs/concepts/architecture#transport-layer).

Like LSP, MCP has clients and servers negotiate a set of capabilities. When a client connects to a server, it sends an [`initialize` message](https://spec.modelcontextprotocol.io/specification/2024-11-05/basic/lifecycle/#initialization), with information about what protocol version it supports. The server responds in kind.

From there, the client can ask the server about what features it has. MCP describes three different kinds of features that a server can provide:

- **Prompts**: Templates that shape how language models respond. They’re the difference between getting generic text and precise, useful results. A good prompt is like a well-designed API - it defines the contract between you and the model.
- **Resources**: Reference materials that ground models in reality. By providing structured data alongside your query, you transform a model from a creative writer into an informed assistant with domain-specific knowledge. *(Think: databases, file systems, documents)*
- **Tools**: Functions that extend what models can do. They allow AI to calculate, retrieve information, or interact with external systems when simple text generation isn’t enough. Tools bridge the gap between language understanding and practical capability.

Our previous example handwaved the existence of a “Get Weather” tool. MCP gives our client a standard way to consult various connected services.

To get a list of available tools on an MCP, the client would send a `tools/list` request to the server:

```json
{
  "jsonrpc": "2.0", 
  "id": 1, 
  "method": "tools/list", 
  "params": {}
}
```

In our example, the server would respond:

```json
{
  "jsonrpc":"2.0",
  "id": 1,
  "result": {
    "tools": [
      {
          "name": "get_weather",
          "description": "Returns current weather conditions for the specified coordinates.",
          "inputSchema": {
              "type": "object", 
              "properties": {
                  "latitude": { "type": "number" },
                  "longitude": { "type": "number" }
              },
              "required": ["latitude", "longitude"]
          }
      }
    ]
  }
}
```

The client can share this list of tools with the language model in a system prompt or a user message. When the model responds wanting to invoke the `get_weather` tool, the client asks the user to confirm tool use. If the human-in-the-loop says 🆗, the client sends a `tools/call` request:

```json
{
  "jsonrpc": "2.0", 
  "id": 2,
  "method": "tools/call", 
  "params": { 
    "name": "get_weather",
    "arguments": {
      "latitude": 45.5155,
      "longitude": -122.6789
    }
  }
}
```

In response, the server sends:

```json
{
  "jsonrpc":"2.0",
  "id": 2,
  "content": [
    {
      "type": "text",
      "text": "{\"temperature\": 12, \"conditions\": \"cloudy\", \"humidity\": 85}"
      "annotations": {
        "audience": ["assistant"]
      }
    }
  ]
}
```

The client then passes that result to the AI assistant, the assistant generates a response with this information, and the client passes that along to the user.

---

That’s pretty much all there is to it. There are plenty of details to get bogged down with. But that’s what LLMs are for. Now is the time for vibes coding.  
MCP is [punk rock](https://www.itsnicethat.com/features/toby-mott-oh-so-pretty-punk-in-print-phaidon-111016).

![](https://nshipster.com/assets/model-context-protocol-now-form-a-band-ab7651306a4d438d2b3c52e7582167b11b01cd802b1b947b46ef43fdca30b5e08d9ace872f3cec0198d6f7f350ecd3e03b92f5e3f94f72f5122628fcfb36a4a8.webp)

## How do I start?

MCP is an emerging standard from Anthropic. So it’s no surprise that [Claude Desktop](https://claude.ai/download) is most capable of showing off what it can do.

Once you have Claude Desktop installed, you can peruse the [myriad example servers](https://modelcontextprotocol.io/examples) available.

Or, if you want to skip straight to la *crème de la crème*, then have a taste of what we’ve been cooking up with MCP lately:

### iMCP

Fun fact! The word *“paradise”* derives from an old word for *“walled garden”*.

Ironic how Apple has a way of making your digital life a living hell sometimes.

For many of us who exist in Apple’s walled garden, we’re often frustrated by the product design and software quality that gets between us and our data. Spotlight search is stuck in the ‘00s. Apple Intelligence [didn’t live up to the hype](https://nshipster.com/ollama). Siri seems doomed to suck forever.

That was our motivation for building [iMCP](https://imcp.app/).

 ![iMCP](https://nshipster.com/assets/model-context-protocol-imcp--light-31ea0f8a3163944f2c9b9a6fa91a32b92e87cf7eaa60a10ea12387f5862983f9fff00ba4001014b373edefc4596936c463f26998d10b59c8baeef83e939c8b03.svg)

iMCP is a macOS app for connecting your digital life with AI. It works with Claude Desktop and a growing list of clients that support MCP. It gives MCP access to your calendars, contacts, even messages — [no small feat](https://github.com/loopwork-ai/iMCP?tab=readme-ov-file#imessage-database-access)!

[Download it today](https://imcp.app/download) and get a taste of some *real* Apple intelligence.

### mcp-swift-sdk

In the process of building iMCP, we built a [Swift SDK](https://github.com/loopwork-ai/mcp-swift-sdk) for Model Context Protocol servers and clients.

If you’re inspired to build your own MCP app and like working in Swift more than Python or TypeScript, definitely give this a try!

### hype

If, however, you have accepted Python into your heart as I have, then I’d recommend checking out another project I’ve been working on: [hype](https://github.com/loopwork-ai/hype).

My goal with hype is to eliminate every barrier between writing Python code and calling it in a way that’s useful. Add the `@hype.up` decorator to a function to instantly generate an HTTP API, a CLI, a GUI, or an MCP.

```python
# example.py
import hype
from pydantic import Field

@hype.up
def divide(
    x: int,
    y: int = Field(gt=0),
) -> int:
    """
    Divides one number by another.
    :param x: The numerator
    :param y: The denominator
    :return: The quotient
    """
    return x // y
```

Start up an MCP server with the `hype` command:

```console
$ hype mcp example.py
```

### emcee

But really, the best code is code you don’t have to write. If you already have a web application with an [OpenAPI specification](https://www.openapis.org/), you can use another tool we built — [emcee](https://emcee.sh/) — to instantly spin up an MCP server to it.

![emcee](https://nshipster.com/assets/model-context-protocol-emcee-871c814a97243a12f890b8db83094b8311ec299d2cc85e5c32ef831313b42785dab37c681b695579f0e420d483dcfeba3751ea49178f7eca6c0d70ef6a42a381.png)

We think emcee is a convenient way to connect to services that don’t have an existing MCP server implementation — *especially for services you’re building yourself*. Got a web app with an OpenAPI spec? You might be surprised how far you can get without a dashboard or client library.

---

In case it’s not abundantly clear, we here at NSHipster dot com are pretty bought into the promise of Model Context Protocol. And we’re excited to see where everything goes in the coming months.

If you’re building in this space, I’d love to [hear from you](https://nshipster.com/model-context-protocol/) ✌️

## My Notes