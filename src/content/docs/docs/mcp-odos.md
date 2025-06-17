---
title: MCP-ODOS
description: Smart contract ABI interactions for Ethereum-compatible blockchains
# layout: ../../layouts/DocLayout.astro
---

# MCP-ABI: ABI Generation Tool

## MCP-ODOS

**Package**: `mcp-odos`  
**Purpose**: Interact with decentralized exchanges through ODOS aggregation

### Available Tools

#### `ODOS_GET_QUOTE`

Fetch a quote for a swap:

- Parameters:
  - `chainId` (number): The chain ID of the DEX
  - `sellToken` (string): The token you want to sell
  - `buyToken` (string): The token you want to buy
  - `sellAmount` (string): The amount of tokens you want to sell

#### `ODOS_EXECUTE_SWAP`

Execute a swap:

- Parameters:
  - `chainId` (number): The chain ID of the DEX
  - `sellToken` (string): The token you want to sell
  - `buyToken` (string): The token you want to buy
  - `sellAmount` (string): The amount of tokens you want to sell
  - `quote` (string): The quote from the get-quote service
  - `walletProvider` (string): The wallet provider to use

### Configuration Example

```json
{
  "mcpServers": {
    "odos-server": {
      "command": "pnpm",
      "args": ["dlx", "mcp-odos"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    }
  }
}
```
