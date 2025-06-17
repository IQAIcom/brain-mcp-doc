---
title: MCP-FRAXLEND
description: Smart contract ABI interactions for Ethereum-compatible blockchains
# layout: ../../layouts/DocLayout.astro
---

# MCP-ABI: ABI Generation Tool

## MCP-Fraxlend

**Package**: `@iqai/mcp-fraxlend`  
**Purpose**: Interact with the Fraxlend lending platform

### Available Tools

#### `LENDING_STATS`

Fetch statistics for a specific Fraxlend pair:

- Parameters: `pairAddress` (string)

#### `LEND`

Lend assets to a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

#### `BORROW`

Borrow assets from a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

#### `ADD_COLLATERAL`

Add collateral to a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

#### `REMOVE_COLLATERAL`

Remove collateral from a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

#### `REPAY`

Repay borrowed assets to a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

#### `WITHDRAW`

Withdraw lent assets from a specific Fraxlend pair:

- Parameters: `pairAddress` (string), `amount` (string)
- Requires: `WALLET_PRIVATE_KEY`

#### `PAIR_ADDRESS`

Get the pair address for a specific Fraxlend pair:

- Parameters: `collateralToken` (string), `borrowedToken` (string)

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
