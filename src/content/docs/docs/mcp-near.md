---
title: MCP-NEAR
description: NEAR Protocol blockchain integration with AI-driven event processing
# layout: ../../layouts/DocLayout.astro
---

**Package**: `@iqai/mcp-near`  
**Purpose**: NEAR Protocol blockchain integration with AI-driven event processing

### Key Features

- ✅ Execute contract methods and transactions on NEAR blockchain
- ✅ Listen to and respond to contract events with AI processing
- ✅ View contract data and account information
- ✅ Handle custom logic through intelligent event listeners
- ✅ Compatible with any MCP client

### AI-Driven Event Processing Workflow

1. 🔗 Smart contract transaction triggers an event and pauses execution
2. 🤖 MCP server detects the event and requests AI processing from the client
3. 🧠 AI client processes the event data and provides intelligent response
4. ↩️ Server sends AI response back to blockchain via transaction
5. ✅ Original smart contract resumes with the AI-provided data

### Environment Variables

| Variable          | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `ACCOUNT_ID`      | Your NEAR account ID for authentication                                |
| `ACCOUNT_KEY`     | Private key for your NEAR account (ed25519: or secp256k1: format)      |
| `NEAR_NETWORK_ID` | NEAR network ("mainnet", "testnet", "betanet") - defaults to "mainnet" |
| `NEAR_NODE_URL`   | Custom NEAR RPC endpoint (optional)                                    |
| `NEAR_GAS_LIMIT`  | Gas limit for transactions (optional)                                  |

### Available Tools

#### `watch_near_event`

Start watching for specific events on a NEAR contract:

```json
{
  "eventName": "run_agent",
  "contractId": "contract.testnet",
  "responseMethodName": "agent_response",
  "cronExpression": "*/10 * * * * *"
}
```

#### `stop_watching_near_event`

Stop watching for specific events:

```json
{
  "contractId": "contract.testnet",
  "eventName": "run_agent"
}
```

#### `list_watched_near_events`

List all currently watched events and statistics:

```json
{
  "includeStats": true
}
```

### Configuration Example

```json
{
  "mcpServers": {
    "near-server": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-near"],
      "env": {
        "ACCOUNT_ID": "your-account.testnet",
        "ACCOUNT_KEY": "ed25519:your_private_key_here",
        "NEAR_NETWORK_ID": "testnet"
      }
    }
  }
}
```
