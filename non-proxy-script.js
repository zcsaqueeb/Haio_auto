const axios = require("axios");
const fs = require("fs");
const nacl = require("tweetnacl");
const bs58 = require("bs58");
const chalk = require("chalk");
const { Keypair } = require("@solana/web3.js");

// Configuration
const referralCodes = fs.readFileSync("code.txt", "utf8").split("\n").map(code => code.trim());
let accounts = [];

async function requestChallenge(publicKey) {
    try {
        await randomDelay();
        const response = await axios.post("https://prod-api.haio.fun/api/auth/request-challenge", { publicKey });
        return response.data.success ? response.data.content.message : null;
    } catch (error) {
        console.error(chalk.red(`❌ Error requesting challenge: ${error.response?.data || error.message}`));
        return null;
    }
}

function signMessage(message, secretKey) {
    try {
        const messageUint8 = new TextEncoder().encode(message);
        const keypair = nacl.sign.keyPair.fromSecretKey(bs58.decode(secretKey));
        return bs58.encode(nacl.sign.detached(messageUint8, keypair.secretKey));
    } catch (error) {
        console.error(chalk.red(`❌ Error signing message: ${error.message}`));
        return null;
    }
}

async function verifyLogin(publicKey, secretKey, challengeMessage) {
    const signature = signMessage(challengeMessage, secretKey);
    if (!signature) return null;
    try {
        await randomDelay();
        const response = await axios.post("https://prod-api.haio.fun/api/auth/verify", { publicKey, signature });
        return response.data.success ? response.data.content.accessToken : null;
    } catch (error) {
        console.error(chalk.red(`❌ Error verifying login: ${error.response?.data || error.message}`));
        return null;
    }
}

async function useReferral(token, account, referralCode) {
    try {
        await randomDelay();
        const response = await axios.post(
            "https://login-er46geo74a-uc.a.run.app/",
            { referralCode },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
            console.log(chalk.green(`✅ Referral Applied Successfully with code: ${referralCode}`));
            account.referralCodeUsed = referralCode;
            accounts.push(account);
        } else {
            console.log(chalk.red("❌ Failed to use referral"));
        }
    } catch (error) {
        console.error(chalk.red(`❌ Error using referral: ${error.response?.data || error.message}`));
    }
}

async function claimReward(token) {
    try {
        await randomDelay();
        const response = await axios.post(
            "https://claimscratchboxcoupon-er46geo74a-uc.a.run.app/",
            {},
            { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data.success ? chalk.green("✅ Reward Claimed Successfully!") : chalk.red("❌ Failed to claim reward"));
    } catch (error) {
        console.error(chalk.red(`❌ Error claiming reward: ${error.response?.data || error.message}`));
    }
}

// Utility: Random Delay
async function randomDelay() {
    const delay = Math.random() * 2000 + 1000;
    return new Promise((resolve) => setTimeout(resolve, delay));
}

(async () => {
    console.log(chalk.green("🔹 Running Combined Script..."));

    for (let i = 0; i < 60; i++) {  // increce refer count here
        console.log(chalk.blue(`\n🔄 Creating Wallet ${i + 1}/100...`));
        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const secretKey = bs58.encode(keypair.secretKey);
        console.log(chalk.green("✅ Wallet Created"));
        console.log("🔑 Public Key:", chalk.yellow(publicKey));

        const challengeMessage = await requestChallenge(publicKey);
        if (!challengeMessage) continue;

        const token = await verifyLogin(publicKey, secretKey, challengeMessage);
        if (!token) continue;

        console.log(chalk.green(`🔄 Applying referral ${i + 1}/100 with code: ${referralCodes[i % referralCodes.length]}...`));
        const account = { publicKey, secretKey };
        await useReferral(token, account, referralCodes[i % referralCodes.length]);

        console.log(chalk.green(`🔄 Claiming reward ${i + 1}/100...`));
        await claimReward(token);
    }

    fs.writeFileSync("accounts.json", JSON.stringify(accounts, null, 4));
    console.log(chalk.green("📂✅ Accounts and referrals saved in accounts.json"));
})();
