# 🚀 UDP Server in Node.js  

This repository contains a basic **UDP server** built using **Node.js**.  
You can test it using **Netcat (ncat)** and monitor network traffic using **Wireshark**.  

---

## 🎥 Demo Video  
[![Watch the Demo](![Screenshot 2025-03-06 191141](https://github.com/user-attachments/assets/5af53d44-e829-4a07-a756-363963a0aafa)
)](https://github.com/user-attachments/assets/aa2c6521-9040-493f-95ea-618fe931180a)

Click the image above to watch a video demonstration.

---

## 📌 Getting Started  

### 1️⃣ Install Dependencies  
Ensure you have **Node.js** installed on your system. If not, install it from [Node.js Official Website](https://nodejs.org/).  

### 2️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/udp-server.git
cd '.\4. udp-server\'
```

### 3️⃣ Start the UDP Server  
Run the server using:  
```sh
node server.js
```
You should see an output like:  
```sh
Server listening on 0.0.0.0:3000
```

---

## 🛠 Testing the UDP Server  

### ✅ Using Netcat (ncat) to Send Messages  
You need **Netcat (ncat)** installed to test UDP messages.  

#### **For Linux/macOS:**  
```sh
ncat -u 127.0.0.1 3000
```
#### **For Windows (Using Telnet or Netcat):**  
```sh
ncat.exe -u 127.0.0.1 3000
```

Now, type a message and press **Enter**. The UDP server should echo the message back.

---

## 📡 Monitoring UDP Traffic using Wireshark  

1. Download and install **Wireshark** from [Wireshark Official Website](https://www.wireshark.org/).  
2. Open **Wireshark** and start capturing on the interface where the UDP server is running.  
3. Apply the filter:  
   ```
   udp.port == 3000
   ```
4. You will see the UDP packets being sent and received.

---

## 📥 Installing Netcat and Wireshark  

### 🔹 **Install Netcat (ncat)**  

#### **For Debian/Ubuntu (Linux):**  
```sh
sudo apt install netcat
```
#### **For macOS (Using Homebrew):**  
```sh
brew install nmap
```
#### **For Windows:**  
Download **Netcat for Windows** from [Netcat for Windows](https://joncraton.org/blog/46/netcat-for-windows).  

---

### 🔹 **Install Wireshark**  
Download and install **Wireshark** from [Wireshark Official Website](https://www.wireshark.org/download.html).  
