---
title: MCP-BAMM
description: Model Context Protocol Server for Borrow Automated Market Maker
---

**Package**: [`mcp-bamm`](https://www.npmjs.com/package/@iqai/mcp-bamm)
**Purpose**: Interacting with Borrow Automated Market Maker (BAMM) contracts on the Fraxtal blockchain.

### Features

- Allows MCP-compatible clients to manage BAMM positions, borrow against LP tokens, and perform other operations related to the BAMM protocol.
- Built using TypeScript and `fastmcp`.

### 🔧 Available Tools

The server exposes the following tools that MCP clients can utilize:

- **`ADD_COLLATERAL`**: Add collateral to your BAMM position.

  - Parameters: `bammAddress` (string), `amount` (string), `collateralToken` (string, optional), `collateralTokenSymbol` (string, optional)
  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`BORROW`**: Borrow tokens from a BAMM position.

  - Parameters: `bammAddress` (string), `amount` (string), `borrowToken` (string, optional), `borrowTokenSymbol` (string, optional)
  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`REPAY`**: Repay borrowed tokens to a BAMM position.

  - Parameters: `bammAddress` (string), `amount` (string), `borrowToken` (string, optional), `borrowTokenSymbol` (string, optional)
  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`LEND`**: Lend Fraxswap LP tokens to a BAMM contract.

  - Parameters: `bammAddress` (string), `amount` (string)
  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`WITHDRAW`**: Withdraw LP tokens from a BAMM contract by redeeming BAMM tokens.

  - Parameters: `bammAddress` (string), `amount` (string)
  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`REMOVE_COLLATERAL`**: Remove collateral from your BAMM position.

  - Parameters: `bammAddress` (string), `amount` (string), `collateralToken` (string, optional), `collateralTokenSymbol` (string, optional)
  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`GET_POSITIONS`**: Get all your active BAMM positions.

  - Requires `WALLET_PRIVATE_KEY` in the environment.

- **`POOL_STATS`**: Get statistics for all BAMM pools.
  - Requires `WALLET_PRIVATE_KEY` in the environment.

### Environment Variables

- `WALLET_PRIVATE_KEY`: (Required for all blockchain operations)
  - The private key of the wallet to be used for interacting with BAMM contracts (signing transactions for lending, borrowing, etc.).
  - **Security Note:** Handle this private key with extreme care. Ensure it is stored securely and only provided to trusted MCP client configurations.

### Configuration Example

```json
{
  "mcpServers": {
    "bamm-mcp-server": {
      "command": "pnpm",
      "args": ["dlx", "mcp-bamm"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    }
  }
}
```

**Alternative if Globally Installed:**

If you have installed `mcp-bamm` globally (`pnpm add -g mcp-bamm`), you can simplify the `command` and `args`:

```json
{
  "mcpServers": {
    "bamm-mcp-server": {
      "command": "mcp-bamm",
      "args": [],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    }
  }
}
```

### 🎯 Usage Examples

```javascript
// First, ensure the WALLET_PRIVATE_KEY environment variable is set on the server

// Add collateral to a BAMM position
await client.runTool("ADD_COLLATERAL", {
  bammAddress: "0xC5B225cF058915BF28D7d9DFA3043BD53C63Ea84",
  amount: "100",
  collateralTokenSymbol: "FRAX",
});

// Get all your positions
await client.runTool("GET_POSITIONS", {});
```

### 📊 Response Examples

`{ "txHash": "0x..." }`

`📊 *Your Active BAMM Positions*\n\n**💰 BAMM Position**\n- bamm: 0x...\n- Pair: 0x...\n- FRAX: 100\n- USDC: 200\n- rented: 0`

### ❌ Error Handling

```
`❌ Failed to retrieve positions: Failed to fetch pool details: Not Found`
`Error: Pool stats not available`
`Error: Remove collateral amount must be greater than 0`
`Error: Withdraw amount must be greater than 0`
```
