---
title: 📱 MCP Telegram
description: An MCP server for interacting with Telegram bots and channels.
---

**Package**: [`@iqai/mcp-telegram`](https://www.npmjs.com/package/@iqai/mcp-telegram)  
**Purpose**: Interacting with Telegram bots and channels using the Telegraf library.

### Features

- Provides tools to send messages, get channel information, forward messages, pin messages, and get channel members.
- Uses the Telegraf library, a modern and feature-rich Telegram bot framework for Node.js.

### 🔧 Available Tools

The server exposes the following tools that MCP clients can utilize:

- **`SEND_MESSAGE`**: Send a message to a Telegram chat or channel.
  - Parameters: `chatId` (string), `text` (string), `parseMode` (string, optional), `disableWebPagePreview` (boolean, optional), `disableNotification` (boolean, optional)
- **`GET_CHANNEL_INFO`**: Get information about a channel or chat.
  - Parameters: `channelId` (string)
- **`FORWARD_MESSAGE`**: Forward a message from one chat to another.
  - Parameters: `fromChatId` (string), `toChatId` (string), `messageId` (string), `disableNotification` (boolean, optional)
- **`PIN_MESSAGE`**: Pin a message in a chat or channel.
  - Parameters: `chatId` (string), `messageId` (string), `disableNotification` (boolean, optional)
- **`GET_CHANNEL_MEMBERS`**: Get channel administrators (limited by Telegram API).
  - Parameters: `channelId` (string), `limit` (number, optional)

### Environment Variables

- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token (required)

### Configuration Example

```json
{
  "mcpServers": {
    "telegram-mcp-server": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "TELEGRAM_BOT_TOKEN": "your_bot_token_here"
      }
    }
  }
}
```

### 💬 Usage Examples

##### SEND_MESSAGE

Send a message to a Telegram channel:

```json
{
  "tool_name": "SEND_MESSAGE",
  "arguments": {
    "chatId": "@mychannel",
    "text": "Hello from the Telegram MCP Server!"
  }
}
```

##### GET_CHANNEL_INFO

Get information about a Telegram channel:

```json
{
  "tool_name": "GET_CHANNEL_INFO",
  "arguments": {
    "channelId": "@mychannel"
  }
}
```

### 📊 Response Examples

##### SEND_MESSAGE

Successful response:

```json
{
  "success": true,
  "result": "Message sent successfully!\n\nMessage ID: 123\nChat ID: @mychannel\nSent at: 2024-03-15T12:34:56.789Z\nText: Hello from the Telegram MCP Server!"
}
```

##### GET_CHANNEL_INFO

Successful response:

```json
{
  "success": true,
  "result": "Channel Information:\n\nTitle: My Channel\nID: -1001234567890\nType: channel\nUsername: mychannel\nDescription: This is my Telegram channel.\nMember Count: 1234"
}
```

### ❌ Error Handling

The tools will return an error message in the `result` field if an error occurs. Common errors include:

- **Missing bot token:** Ensure the `TELEGRAM_BOT_TOKEN` environment variable is set.
- **Invalid chat ID:** Double-check the chat ID or username.
- **Bot not in channel:** Add the bot to the channel with appropriate permissions.

### Bot Setup

1. Create a bot with [@BotFather](https://t.me/botfather)
2. Get your bot token
3. Add your bot to channels with appropriate permissions
4. Use channel usernames (e.g., @mychannel) or chat IDs for interactions

This Telegram MCP server provides comprehensive tools for interacting with Telegram channels and chats, including sending messages, getting channel information, forwarding messages, pinning messages, and retrieving member lists. The bot uses the Telegraf library which is a modern and feature-rich Telegram bot framework for Node.js.
