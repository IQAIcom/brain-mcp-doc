---
title: 🔄 MCP ODOS
description: Interact with decentralized exchanges through ODOS aggregation
# layout: ../../layouts/DocLayout.astro
---

**Package**: [`@iqai/mcp-odos`](https://www.npmjs.com/package/@iqai/mcp-odos)  
**Purpose**: Interact with decentralized exchanges through ODOS aggregation

### ✨ Features

- Interact with decentralized exchanges through ODOS aggregation
- Fetch a quote for a swap
- Execute a swap

### 🔧 Available Tools

##### `ODOS_GET_QUOTE`

Fetch a quote for a swap:

- Parameters:
  - `chainId` (number): The chain ID of the DEX
  - `sellToken` (string): The token you want to sell
  - `buyToken` (string): The token you want to buy
  - `sellAmount` (string): The amount of tokens you want to sell

##### `ODOS_EXECUTE_SWAP`

Execute a swap:

- Parameters:
  - `chainId` (number): The chain ID of the DEX
  - `sellToken` (string): The token you want to sell
  - `buyToken` (string): The token you want to buy
  - `sellAmount` (string): The amount of tokens you want to sell
  - `quote` (string): The quote from the get-quote service
  - `walletProvider` (string): The wallet provider to use

### Environment Variables

- `WALLET_PRIVATE_KEY`: Required for `LEND`, `BORROW`, `ADD_COLLATERAL`, `REMOVE_COLLATERAL`, `REPAY`, `WITHDRAW`
- The private key of the wallet to be used for interacting with the Fraxlend platform (e.g., signing transactions for lending, borrowing, etc.).

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

### 💬 Usage Examples

##### 📊 `GET_SWAP_QUOTE`

- "Get me a quote for swapping 1 wfrxEth to FRAX on Fraxtal"
- "What rate would I get for trading 0.5 ETH to USDC?"
- "Check current exchange rate between DAI and FXS"

##### 💱 `EXECUTE_TOKEN_SWAP`

- "Swap 100 DAI to FXS"
- "Exchange 0.1 ETH for USDT"
- "Trade my wfrxEth for FRAX"

### 📊 Response Examples

```json
💱 Quote Details
{
  "inTokens": ["0x..."],
  "outTokens": ["0x..."],
  "inAmounts": ["1000000000000000000"],
  "outAmounts": ["990000000000000000"],
  "pathId": "0x...",
  "gasEstimate": 200000,
  "gasEstimateValue": 0.1,
  "netOutValue": 100,
  "priceImpact": 0.01
}
```

### ❌ Error Handling

The server provides detailed error messages to help diagnose issues. Errors typically include a `detail` message, a `traceId` for debugging, and an `errorCode`.

Example Error Response:

```json
{
  "detail": "Failed to fetch quote: invalid fromToken address",
  "traceId": "...",
  "errorCode": "INVALID_ADDRESS"
}
```
