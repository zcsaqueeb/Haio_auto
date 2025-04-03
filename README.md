Here's the updated `README.md` incorporating your GitHub repository link prominently:

---

# Automated Wallet Referral and Reward Script

🚀 **Boost your rewards with my referral link**: [Join Here!](https://haio.fun/introduction/?ref=7510bd0a69ecb690a488b3b12b2efeb8ccb99f09)

📂 **Access the project on GitHub**: [Haio Auto Repository](https://github.com/zcsaqueeb/Haio_auto.git)

This script automates wallet creation, applies referral codes, and claims rewards via the Haio API. It's designed for smooth execution, multi-referral support, and bot-detection mitigation, ensuring efficient and seamless functionality.

---

## Features
- 🔑 **Wallet Creation**: Automatically generates Solana wallets.
- 🌟 **Multi-Referral Support**: Supports multiple referral codes for maximum efficiency.
- 🎁 **Reward Automation**: Automatically applies referrals and claims rewards.
- 🤖 **Human-Like Interaction**: Randomized delays to avoid bot detection.
- 🛠️ **Customizable**: Adjustable settings to suit your needs.

---

## Prerequisites
Ensure you have:
1. [Node.js](https://nodejs.org/) (version 16 or higher recommended)
2. [npm](https://www.npmjs.com/) (comes with Node.js)
3. Stable internet access.

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
   ```

3. Configuration:
   - Add your referral codes to `referralCodes.txt`, one code per line.
   - Ensure the `code.txt` file is ready for any additional data needed.

---

## Usage
Run the script with:
```bash
node coffin.js
```

### Adjustments
- Change the `referralCount` variable in `script.js` to set the number of referrals.
- Ensure all referral codes are listed in `referralCodes.txt`.

---

## Outputs
- Wallets and referral details are saved in `accounts.json`.
- Logs provide detailed feedback on each operation.

---

## Project Structure
```
Haio_auto/
├── script.js           # Main script
├── referralCodes.txt   # Input: Referral codes
├── code.txt            # Input: Extra data file
├── accounts.json       # Output: Wallet details
├── package.json        # Dependencies and metadata
└── README.md           # Documentation
```

---

## Bot Detection Mitigation
Randomized delays simulate human-like interactions to avoid bot detection.

---

## Disclaimer
This project is for educational purposes only. Ensure compliance with the terms and conditions of the services and APIs used.

---

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
