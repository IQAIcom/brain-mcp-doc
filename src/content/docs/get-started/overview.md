---
title: Overview
description: Introduction to IQ AI's Model Context Protocol (MCP) servers
---

# IQ AI MCP Servers Documentation

Welcome to the comprehensive documentation for IQ AI's Model Context Protocol (MCP) servers. These servers enable AI agents and applications to interact with blockchain protocols, DeFi platforms, and specialized services through a standardized interface.

## Key Features

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
<h3 class="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">🔌 Protocol Integration</h3>
<p>Standardized interfaces for multiple blockchain protocols and DeFi platforms</p>
</div>

<div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
<h3 class="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">🤖 AI-Optimized</h3>
<p>Designed specifically for AI agent interaction with clear input/output formats</p>
</div>

<div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
<h3 class="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">⚡️ High Performance</h3>
<p>Optimized for low-latency interactions with blockchain networks</p>
</div>

<div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
<h3 class="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">🔐 Secure</h3>
<p>Built with security best practices for handling sensitive operations</p>
</div>

</div>

## Overview

Model Context Protocol (MCP) servers provide a standardized way for AI agents to interact with external services and blockchain protocols. Our MCP server collection includes:

## MCP Server Collection

Our MCP server collection includes:

- **mcp-abi**: Dynamic smart contract ABI interactions for Ethereum-compatible blockchains
- **mcp-near**: NEAR Protocol blockchain integration with AI-driven event processing
- **mcp-fraxlend**: Fraxlend lending protocol integration
- **mcp-odos**: Decentralized exchange aggregation
- **mcp-atp**: IQ AI Agent Tokenization Platform integration

## Installation Methods

All MCP servers support three installation methods:

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
