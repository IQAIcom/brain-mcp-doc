---
title: ⚡ MCP ATP
description: Interact with the IQ AI Agent Tokenization Platform
# layout: ../../layouts/DocLayout.astro
---

**Package**: [`@iqai/mcp-atp`](https://www.npmjs.com/package/@iqai/mcp-atp)  
**Purpose**: Interact with the IQ AI Agent Tokenization Platform

### ✨ Features

- Interact with the IQ AI Agent Tokenization Platform
- Fetch statistics and details for a specific AI agent
- Retrieve the user's current holdings in ATP AI tokens
- Purchase AI agent tokens using IQ as the base currency
- Sell AI agent tokens back to the protocol
- Retrieve logs for a specific AI agent, with pagination
- Add a new log entry for a specific AI agent

### 🔧 Available Tools

##### `ATP_AGENT_STATS`

Fetch statistics and details for a specific AI agent:

- Parameters: `tokenContract` (string)

##### `ATP_GET_AGENT_POSITIONS`

Retrieve the user's current holdings in ATP AI tokens:

- Requires: `ATP_WALLET_PRIVATE_KEY`

##### `ATP_BUY_AGENT`

Purchase AI agent tokens using IQ as the base currency:

- Parameters: `tokenContract` (string), `amount` (string)
- Requires: `ATP_WALLET_PRIVATE_KEY`

##### `ATP_SELL_AGENT`

Sell AI agent tokens back to the protocol:

- Parameters: `tokenContract` (string), `amount` (string)
- Requires: `ATP_WALLET_PRIVATE_KEY`

##### `ATP_GET_AGENT_LOGS`

Retrieve logs for a specific AI agent, with pagination:

- Parameters: `agentTokenContract` (string), `page` (number, optional), `limit` (number, optional)

##### `ATP_ADD_AGENT_LOG`

Add a new log entry for a specific AI agent:

- Parameters: `agentTokenContract` (string), `content` (string), `apiKey` (string), `txHash` (string, optional), `chainId` (number, optional)

### Environment Variables

- `ATP_WALLET_PRIVATE_KEY`: Required for position and trading operations
- `ATP_API_KEY`: Required for certain backend API calls

### Configuration Example

```json
{
  "mcpServers": {
    "atp-server": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-atp"],
      "env": {
        "ATP_WALLET_PRIVATE_KEY": "your_wallet_private_key_here",
        "ATP_API_KEY": "your_iq_atp_api_key_here"
      }
    }
  }
}
```

### 💬 Usage Examples

- "Add log for agent `0x1234...5678`: Just executed weekly yield distribution"
- "Create log entry for Frax God: Updated pricing model" _(Works only if token contract found in previous messages)_
- "Log for agent `0x1234...5678` with transaction hash `0xabc...def`: Distribution complete"

### 📜 Response Format

Actions return **structured responses** including:

✔ **Transaction status & hash** (for trades) 🔗  
✔ **Formatted token amounts** 💲  
✔ **Error messages when applicable** ⚠  
✔ **Agent addresses and statistics** 🏷  
✔ **Formatted agent logs** 📄

### ❌ Error Handling

The plugin **handles various error scenarios**:

🚨 **Invalid token contracts**  
💸 **Insufficient balances**  
🔄 **Transaction failures**  
🌐 **Network issues**  
🛑 **Input validation errors**  
🔑 **Missing API key for log creation**
