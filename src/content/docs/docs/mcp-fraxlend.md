---
title: MCP-FRAXLEND
description: Interact with the Fraxlend lending platform
# layout: ../../layouts/DocLayout.astro
---

**Package**: [`@iqai/mcp-fraxlend`](https://www.npmjs.com/package/@iqai/mcp-fraxlend)  
**Purpose**: Interact with the Fraxlend lending platform

### ✨ Features

- Interact with the Fraxlend lending platform
- Fetch statistics for a specific Fraxlend pair
- Lend assets to a specific Fraxlend pair
- Borrow assets from a specific Fraxlend pair
- Add collateral to a specific Fraxlend pair
- Remove collateral from a specific Fraxlend pair
- Repay borrowed assets to a specific Fraxlend pair
- Withdraw lent assets from a specific Fraxlend pair
- Get the pair address for a specific Fraxlend pair

### 🔧 Available Tools

##### `LENDING_STATS`

Fetch statistics for a specific Fraxlend pair:

- Parameters: `pairAddress` (string)

##### `LEND`

Lend assets to a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

##### `BORROW`

Borrow assets from a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

##### `ADD_COLLATERAL`

Add collateral to a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

##### `REMOVE_COLLATERAL`

Remove collateral from a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

##### `REPAY`

Repay borrowed assets to a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

##### `WITHDRAW`

Withdraw lent assets from a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

##### `PAIR_ADDRESS`

Get the pair address for a specific Fraxlend pair:

- Parameters: `collateralToken` (string), `borrowedToken` (string)

### Environment Variables

- `WALLET_PRIVATE_KEY`: Required for `LEND`, `BORROW`, `ADD_COLLATERAL`, `REMOVE_COLLATERAL`, `REPAY`, `WITHDRAW`
- The private key of the wallet to be used for interacting with the Fraxlend platform (e.g., signing transactions for lending, borrowing, etc.).

### Configuration Example

```json
{
  "mcpServers": {
    "fraxlend-server": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-fraxlend"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    }
  }
}
```

### 💬 Usage Examples

```
“Add log for agent 0x1234...5678: Just executed weekly yield distribution”
“Create log entry for Frax God: Updated pricing model” (Works only if token contract found in previous messages)
“Log for agent 0x1234...5678 with transaction hash 0xabc...def: Distribution complete”
”What's the pair address for FRAX-ETH pool with the highest APR?”
```

### 📜 Response Format

Actions return **structured responses**, including:

✔ **Transaction status & hash** (for lending/borrowing) 🔗  
✔ **Formatted asset amounts** 💲  
✔ **Error messages when applicable** ⚠  
✔ **Lending market details** 📈

### ❌ Error Handling

The plugin **handles various error scenarios**:

🚨 **Invalid market addresses**  
💸 **Insufficient collateral or liquidity**  
🔄 **Transaction failures**  
🌐 **Network issues**  
🛑 **Input validation errors**
