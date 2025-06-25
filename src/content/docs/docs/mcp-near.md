---
title: 💫 MCP NEAR Agents
description: NEAR Protocol blockchain integration with AI-driven event processing
# layout: ../../layouts/DocLayout.astro
---

**Package**: [`@iqai/mcp-near`](https://www.npmjs.com/package/@iqai/mcp-near-agent)  
**Purpose**: NEAR Protocol blockchain integration with AI-driven event processing

### Key Features

- ✅ Execute contract methods and transactions on NEAR blockchain
- ✅ Listen to and respond to contract events with AI processing
- ✅ View contract data and account information
- ✅ Handle custom logic through intelligent event listeners
- ✅ Compatible with any MCP client

### 🔧 Available Tools

##### `watch_near_event`

Start watching for specific events on a NEAR contract:

```typescript
{
  eventName: "run_agent",           // Event to watch for
  contractId: "contract.testnet",   // Contract to monitor
  responseMethodName: "agent_response", // Method to call with AI response
  cronExpression: "*/10 * * * * *"  // Optional: polling frequency
}
```

##### `stop_watching_near_event`

Stop watching for specific events:

```typescript
{
  contractId: "contract.testnet",
  eventName: "run_agent"
}
```

##### `list_watched_near_events`

List all currently watched events and statistics:

```typescript
{
  includeStats: true; // Optional: include performance statistics
}
```

### 🤖 AI-Driven Event Processing Workflow

The server enables an "AI in the loop" workflow:

1. 🔗 Smart contract transaction triggers an event and pauses execution
2. 🤖 MCP server detects the event and requests AI processing from the client
3. 🧠 AI client processes the event data and provides intelligent response
4. ↩️ Server sends AI response back to blockchain via transaction
5. ✅ Original smart contract resumes with the AI-provided data

### 🌜 Event Processing Flow

When a blockchain event is detected:

1. 📡 **Event Detection**: Server monitors blockchain for specified events
2. 🤖 **AI Request**: Server requests sampling from MCP client with event data
3. 🧠 **AI Processing**: Client processes event and returns intelligent response
4. 📤 **Blockchain Response**: Server sends AI response back to contract
5. 📊 **Statistics**: Performance metrics are tracked and available

### Environment Variables

| Variable          | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `ACCOUNT_ID`      | Your NEAR account ID for authentication                                |
| `ACCOUNT_KEY`     | Private key for your NEAR account (ed25519: or secp256k1: format)      |
| `NEAR_NETWORK_ID` | NEAR network ("mainnet", "testnet", "betanet") - defaults to "mainnet" |
| `NEAR_NODE_URL`   | Custom NEAR RPC endpoint (optional)                                    |
| `NEAR_GAS_LIMIT`  | Gas limit for transactions (optional)                                  |

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

### 🎯 Usage Examples

1. **Start the MCP server** with your client
2. **Watch for events** using the MCP tool:
   ```
   Use watch_near_event with:
   - eventName: "price_request"
   - contractId: "oracle.testnet"
   - responseMethodName: "price_response"
   ```
3. **AI processes events automatically** when they occur on the blockchain
4. **Monitor with** `list_watched_near_events` to see status and statistics

### 📊 Response Format

The server provides structured responses:

- ✔ **Success/failure status** with detailed messages
- 🔗 **Subscription IDs** for tracking active watchers
- 📈 **Performance statistics** (success rates, processing times)
- 🎯 **Event details** (contract, event type, timestamps)
- 💡 **Helpful guidance** and troubleshooting tips

### ❌ Error Handling

The server handles common NEAR-related errors:

- 🚨 **Invalid contract calls** or method names
- 💸 **Insufficient account balance** for transactions
- 🔑 **Authentication issues** with account credentials
- 🌐 **Network connectivity problems** with NEAR RPC
- 🚫 **Contract execution errors** returned by smart contracts
- ⏱️ **Timeout handling** for long-running operations
