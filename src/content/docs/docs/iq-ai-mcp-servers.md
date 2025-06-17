---
title: IQ AI MCP Servers
---

# IQ AI MCP Servers Documentation

Welcome to the comprehensive documentation for IQ AI's Model Context Protocol (MCP) servers. These servers enable AI agents and applications to interact with blockchain protocols, DeFi platforms, and specialized services through a standardized interface.

## Table of Contents

1. [Overview](#overview)
2. [Installation Methods](#installation-methods)
3. [MCP-ABI: ABI Generation Tool](mcp-abi)
4. [MCP-NEAR: NEAR Blockchain Integration](mcp-near)
5. [MCP-Fraxlend: Lending Protocol](mcp-fraxlend)
6. [MCP-ODOS: DEX Aggregation](mcp-odos)
7. [MCP-ATP: AI Agent Tokenization](mcp-atp)
8. [Configuration Guide](#configuration-guide)
9. [Security Considerations](#security-considerations)

## Overview

Model Context Protocol (MCP) servers provide a standardized way for AI agents to interact with external services and blockchain protocols. Our MCP server collection includes:

- [MCP-ABI: ABI Generation Tool](mcp-abi.md)
- **@iqai/mcp-abi**: Dynamic smart contract ABI interactions for Ethereum-compatible blockchains
- **@iqai/mcp-near**: NEAR Protocol blockchain integration with AI-driven event processing
- **@iqai/mcp-fraxlend**: Fraxlend lending protocol integration
- **mcp-odos**: Decentralized exchange aggregation
- **@iqai/mcp-atp**: IQ AI Agent Tokenization Platform integration

## Installation Methods

All MCP servers support three installation methods:

> **Note**: MCP-ABI (`@iqai/mcp-abi`) is a special case that dynamically generates tools based on smart contract ABIs, while the original `mcp-abi` is a development tool for generating ABI files from TypeScript code.

### 1. Using pnpm dlx (Recommended)

Run directly without installation:

```bash
pnpm dlx <package-name>
```

### 2. Global Installation

```bash
pnpm add -g <package-name>
```

### 3. From Source

```bash
git clone <repository-url>
cd <repository-name>
pnpm install
pnpm run build
```

## Configuration Guide

### MCP Client Configuration Template

Here's a complete configuration template for using all MCP servers:

```json
{
  "mcpServers": {
    "mcp-abi-original": {
      "command": "pnpm",
      "args": ["dlx", "mcp-abi"]
    },
    "mcp-abi-smart-contracts": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-abi"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here",
        "CONTRACT_ABI": "[{\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
        "CONTRACT_ADDRESS": "0xaB195B090Cc60C1EFd4d1cEE94Bf441F5931C01b",
        "CONTRACT_NAME": "ERC20",
        "CHAIN_ID": "252"
      }
    },
    "mcp-near": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-near"],
      "env": {
        "ACCOUNT_ID": "your-account.testnet",
        "ACCOUNT_KEY": "ed25519:your_private_key_here",
        "NEAR_NETWORK_ID": "testnet"
      }
    },
    "mcp-fraxlend": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-fraxlend"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    },
    "mcp-odos": {
      "command": "pnpm",
      "args": ["dlx", "mcp-odos"],
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    },
    "mcp-atp": {
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

### Alternative Global Installation Configuration

If you have installed the packages globally:

```json
{
  "mcpServers": {
    "mcp-abi-original": {
      "command": "mcp-abi"
    },
    "mcp-abi-smart-contracts": {
      "command": "mcp-abi",
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here",
        "CONTRACT_ABI": "[{\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
        "CONTRACT_ADDRESS": "0xaB195B090Cc60C1EFd4d1cEE94Bf441F5931C01b",
        "CONTRACT_NAME": "ERC20",
        "CHAIN_ID": "252"
      }
    },
    "mcp-near": {
      "command": "mcp-near",
      "env": {
        "ACCOUNT_ID": "your-account.testnet",
        "ACCOUNT_KEY": "ed25519:your_private_key_here",
        "NEAR_NETWORK_ID": "testnet"
      }
    },
    "mcp-fraxlend": {
      "command": "mcp-fraxlend",
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    },
    "mcp-odos": {
      "command": "mcp-odos",
      "env": {
        "WALLET_PRIVATE_KEY": "your_wallet_private_key_here"
      }
    },
    "mcp-atp": {
      "command": "mcp-atp",
      "env": {
        "ATP_WALLET_PRIVATE_KEY": "your_wallet_private_key_here",
        "ATP_API_KEY": "your_iq_atp_api_key_here"
      }
    }
  }
}
```

## Security Considerations

### Private Key Management

- **Never commit private keys to version control**
- **Use environment variables** for sensitive data
- **Secure your MCP client configuration files** with appropriate file permissions
- **Consider using hardware wallets** or secure key management services for production environments

### Network Security

- **Use HTTPS endpoints** for all API calls
- **Validate all inputs** before processing
- **Implement proper error handling** to prevent information leakage
- **Monitor transaction activity** for suspicious behavior

### Best Practices

- **Use testnet environments** for development and testing
- **Set appropriate gas limits** to prevent runaway costs
- **Implement proper logging** without exposing sensitive data
- **Regularly update dependencies** to patch security vulnerabilities
- **Use least privilege principle** for API keys and permissions

## Error Handling

All MCP servers implement comprehensive error handling:

- **Invalid parameters** are caught and reported with helpful messages
- **Network failures** are handled gracefully with retry mechanisms
- **Blockchain errors** are properly formatted and returned to clients
- **Authentication issues** are clearly identified and communicated
- **Rate limiting** is respected and communicated to prevent service interruptions

## Monitoring and Debugging

### Logging

- All servers provide detailed logging of operations
- Error messages include context and troubleshooting guidance
- Performance metrics are tracked and available through specific tools

### Health Checks

- Servers implement health check endpoints
- Connection status to blockchain networks is monitored
- Service availability is tracked and reported

## Contributing

We welcome contributions to all MCP servers! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes with tests
4. Submit a pull request with a clear description
5. Follow the existing code style and conventions

## Support

For support, issues, or feature requests:

- Visit our GitHub repositories
- Check the documentation for troubleshooting guides
- Open an issue with detailed information about your problem
- Join our community discussions

## License

All MCP servers are released under the MIT License. See individual repositories for specific license information.

---

_This documentation is maintained by the IQ AI team. For the latest updates and additional resources, visit our GitHub organization._
