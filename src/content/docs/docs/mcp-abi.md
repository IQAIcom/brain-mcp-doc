---
title: MCP-ABI
description: Smart contract ABI interactions for Ethereum-compatible blockchains
# layout: ../../layouts/DocLayout.astro
---

**Package**: `@iqai/mcp-abi`  
**Purpose**: Smart contract ABI interactions for Ethereum-compatible blockchains

### Features

- Dynamically generates MCP tools based on contract ABI
- Supports both read (view/pure) and write functions
- Automatic tool naming with contract prefixes
- Compatible with any Ethereum-compatible blockchain
- Comprehensive error handling and transaction management

### Dynamic Tool Generation

The server automatically creates tools for each function in the provided ABI:

- **Read Functions**: Query contract state without transactions
  - Example: `ERC20_BALANCE_OF`, `ERC20_TOTAL_SUPPLY`, `ERC20_NAME`
- **Write Functions**: Execute state-changing transactions
  - Example: `ERC20_TRANSFER`, `ERC20_APPROVE`, `ERC20_MINT`

### Environment Variables

| Variable             | Description                         | Required                             |
| -------------------- | ----------------------------------- | ------------------------------------ |
| `WALLET_PRIVATE_KEY` | Private key for transaction signing | For write functions                  |
| `CONTRACT_ABI`       | JSON string of the contract's ABI   | Yes                                  |
| `CONTRACT_ADDRESS`   | Deployed contract address           | Yes                                  |
| `CONTRACT_NAME`      | Friendly name for tool prefixes     | Optional (defaults to "CONTRACT")    |
| `CHAIN_ID`           | Blockchain network chain ID         | Optional (defaults to Fraxtal - 252) |
| `RPC_URL`            | Custom RPC endpoint URL             | Optional                             |

### Configuration Example

```json
{
  "mcpServers": {
    "smart-contract-abi": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-abi"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here",
        "CONTRACT_ABI": "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]",
        "CONTRACT_ADDRESS": "0xaB195B090Cc60C1EFd4d1cEE94Bf441F5931C01b",
        "CONTRACT_NAME": "ERC20",
        "CHAIN_ID": "252",
        "RPC_URL": "https://rpc.frax.com"
      }
    }
  }
}
```

### Usage Examples

#### ERC20 Token Contract

- **Check balance**: `ERC20_BALANCE_OF` with address parameter
- **Transfer tokens**: `ERC20_TRANSFER` with recipient and amount
- **Check allowances**: `ERC20_ALLOWANCE` with owner and spender
- **Approve spending**: `ERC20_APPROVE` with spender and amount

#### NFT Contract (ERC721)

- **Check ownership**: `NFT_OWNER_OF` with token ID
- **Transfer NFT**: `NFT_TRANSFER_FROM` with from, to, and token ID
- **Mint token**: `NFT_MINT` with recipient and metadata

### Response Examples

**Read Function Response**:

```
✅ Successfully called balanceOf
Result: "1000000000000000000"
```

**Write Function Response**:

```
✅ Successfully executed transfer
Transaction hash: 0x123abc...
You can view this transaction on the blockchain explorer.
```
