---
title: MCP-IQWiki
description: Model Context Protocol Server for IQ.wiki
---

**Package**: [`@iqai/mcp-iqwiki`](https://www.npmjs.com/package/@iqai/mcp-iqwiki)
**Purpose**: Interacting with IQ.wiki data using the Model Context Protocol.

### Features

- Exposes tools to access wiki information such as specific wikis by ID, user-created wikis, user-edited wikis, and detailed wiki activities.
- Allows MCP-compatible clients (like AI assistants, IDE extensions, or custom applications) to access IQ.wiki data.

### 🔧 Available Tools

The server exposes the following tools that MCP clients can utilize:

- **`GET_WIKI`**: Get details about a specific wiki from the IQ.wiki platform.

  - Parameters: `id` (string) - The ID of the wiki to retrieve.

- **`GET_USER_CREATED_WIKIS`**: List wikis created by a specific user on IQ.wiki.

  - Parameters: `id` (string) - The Ethereum address of the user.
  - Parameters: `timeFrameSeconds` (number, optional) - Time frame in seconds to filter results.

- **`GET_USER_EDITED_WIKIS`**: List wikis edited by a specific user on IQ.wiki.

  - Parameters: `id` (string) - The Ethereum address of the user.
  - Parameters: `timeFrameSeconds` (number, optional) - Time frame in seconds to filter results.

- **`GET_USER_WIKI_ACTIVITIES`**: Get detailed wiki activities (creations or edits) for a user on IQ.wiki.
  - Parameters: `id` (string) - The Ethereum address of the user.
  - Parameters: `activityType` (enum: "CREATED" | "UPDATED", optional) - Type of activity to filter by.
  - Parameters: `timeFrameSeconds` (number, optional) - Time frame in seconds to filter results.

### Environment Variables

N/A - This server does not require environment variables.

### Configuration Example

```json
{
  "mcpServers": {
    "iq-wiki-mcp-server": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-iqwiki"]
    }
  }
}
```

**Alternative if Globally Installed:**

If you have installed `mcp-iqwiki` globally, you can simplify the command:

```json
{
  "mcpServers": {
    "iq-wiki-mcp-server": {
      "command": "mcp-iqwiki",
      "args": []
    }
  }
}
```

### 🎯 Usage Examples

#### GET_WIKI

```json
{
  "id": "bitcoin"
}
```

#### GET_USER_CREATED_WIKIS

```json
{
  "id": "0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889",
  "timeFrameSeconds": 3600
}
```

#### GET_USER_EDITED_WIKIS

```json
{
  "id": "0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889"
}
```

#### GET_USER_WIKI_ACTIVITIES

```json
{
  "id": "0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889",
  "activityType": "CREATED",
  "timeFrameSeconds": 86400
}
```

### ❌ Error Handling

N/A - Error handling will be provided by the MCP client.
