   # Automated Wallet Referral and Reward Script

🚀 **Boost your rewards with my referral link**: [Join Here!](https://haio.fun/introduction/?ref=7510bd0a69ecb690a488b3b12b2efeb8ccb99f09)

This project automates wallet creation, applies referral codes, and claims rewards via the Haio API. It supports **proxy** and **non-proxy** setups, with dynamic proxy configuration using `proxy.txt` for seamless execution.

---

## Features
- 🔑 **Wallet Creation**: Automatically generates Solana wallets.
- 🌟 **Multi-Referral Support**: Handles multiple referral codes stored in `code.txt`.
- 🎁 **Reward Automation**: Applies referral codes and claims rewards with ease.
- 🌐 **Proxy Support**: Compatible with HTTP, HTTPS, SOCKS4, and SOCKS5 proxy formats, retrieved dynamically from `proxy.txt`.
- 🛠️ **Customizable**: Easily configurable to suit your needs.

---

## Prerequisites
1. [Node.js](https://nodejs.org/) (version 16 or higher recommended)
2. [npm](https://www.npmjs.com/) (comes bundled with Node.js)
3. Stable internet connection.

---

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/zcsaqueeb/Haio_auto.git
   cd Haio_auto
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install proxy-agent

   ```

3. Add your referral codes:
   - Create or modify the `code.txt` file in the project root.
   - Add one referral code per line.

4. Add your proxy configuration:
   - Create or modify the `proxy.txt` file in the project root.
   - Add a single proxy address (e.g., `http://username:password@proxy-address:port`) as a single line.

---

## Usage
### Non-Proxy Mode:
Run the non-proxy script directly:
```bash
node non-proxy-script.js
```

### Proxy Mode:
Ensure the proxy is defined in `proxy.txt` and then run:
```bash
node proxy-script.js
```

---

## Outputs
- Wallets and referral details are saved in the `accounts.json` file.
- Each wallet entry includes:
  - **Public Key**
  - **Secret Key**
  - **Referral Code Used**

### Example `accounts.json` File:
```json
[
    {
        "publicKey": "YourPublicKey1",
        "secretKey": "YourSecretKey1",
        "referralCodeUsed": "ReferralCode1"
    },
    {
        "publicKey": "YourPublicKey2",
        "secretKey": "YourSecretKey2",
        "referralCodeUsed": "ReferralCode2"
    }
]
```

---

## Proxy Configuration
### Dynamic Proxy Setup:
The script retrieves the proxy from `proxy.txt`. Supported proxy formats include:
- **HTTP**: `http://username:password@proxy-address:port`
- **HTTPS**: `https://username:password@proxy-address:port`
- **SOCKS4**: `socks4://username:password@proxy-address:port`
- **SOCKS5**: `socks5://username:password@proxy-address:port`

### Example `proxy.txt` File:
```plaintext
http://username:password@proxy-address:port
```

---

## Disclaimer
This project is intended for educational purposes only. Please ensure you comply with the terms and conditions of the services and APIs used.

---

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
