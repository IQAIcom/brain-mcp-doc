---
title: MCP-ATP
description: Smart contract ABI interactions for Ethereum-compatible blockchains
# layout: ../../layouts/DocLayout.astro
---

# MCP-ABI: ABI Generation Tool

## MCP-ATP

**Package**: `@iqai/mcp-atp`  
**Purpose**: Interact with the IQ AI Agent Tokenization Platform

### Available Tools

#### `ATP_AGENT_STATS`

Fetch statistics and details for a specific AI agent:

- Parameters: `tokenContract` (string)

#### `ATP_GET_AGENT_POSITIONS`

Retrieve the user's current holdings in ATP AI tokens:

- Requires: `ATP_WALLET_PRIVATE_KEY`

#### `ATP_BUY_AGENT`

Purchase AI agent tokens using IQ as the base currency:

- Parameters: `tokenContract` (string), `amount` (string)
- Requires: `ATP_WALLET_PRIVATE_KEY`

#### `ATP_SELL_AGENT`

Sell AI agent tokens back to the protocol:

- Parameters: `tokenContract` (string), `amount` (string)
- Requires: `ATP_WALLET_PRIVATE_KEY`

#### `ATP_GET_AGENT_LOGS`

Retrieve logs for a specific AI agent, with pagination:

- Parameters: `agentTokenContract` (string), `page` (number, optional), `limit` (number, optional)

#### `ATP_ADD_AGENT_LOG`

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
