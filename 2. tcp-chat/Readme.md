# 📡 TCP Real-Time Chat Application

This is a basic TCP real-time chat application built using Node.js. It allows multiple clients to connect and communicate via a simple TCP server.

## 🎥 Demo Video

[![Demo Video](![Screenshot 2025-03-01 174733](https://github.com/user-attachments/assets/6b6274f6-f215-4668-ae4f-af4b63a92cf6)
)](https://github.com/user-attachments/assets/9aaff295-7d1c-4b5c-972c-1538a842050e)

## 🚀 Features

- ✅ Real-time messaging using TCP sockets
- ✅ Supports multiple clients
- ✅ Can be tested using Netcat or Telnet
- ✅ TCP connection can be monitored using Wireshark

## 📌 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** 🟢
- **Netcat** or **Telnet** for testing 🖥️
- **Wireshark** for monitoring TCP connections 📡

### 🔧 Installation & Usage

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/tcp-chat-app.git
cd tcp-chat-app
```

#### 2️⃣ Start the TCP server

```bash
node server.js
```

#### 3️⃣ Connect clients

Open another terminal and run:

**Using Netcat:**

```bash
nc localhost 3000
```

**Using Telnet:**

```bash
telnet localhost 3000
```

Now, type messages and press Enter to chat with other connected clients. 🎉

## 📡 Installing Required Tools

### 🖥 Installing Netcat

**Ubuntu/Debian:**

```bash
sudo apt update && sudo apt install netcat
```

**macOS (Homebrew):**

```bash
brew install netcat
```

**Windows (Chocolatey):**

```bash
choco install netcat
```

### 📡 Installing Telnet

**Ubuntu/Debian:**

```bash
sudo apt install telnet
```

**macOS:**

```bash
brew install telnet
```

**Windows (Enable Telnet in PowerShell Admin):**

```powershell
dism /online /Enable-Feature /FeatureName:TelnetClient
```

### 📶 Installing Wireshark

**Ubuntu/Debian:**

```bash
sudo apt update && sudo apt install wireshark
```

**macOS:**

```bash
brew install --cask wireshark
```

**Windows:**

Download and install from the [Wireshark Official Site](https://www.wireshark.org/download.html).
