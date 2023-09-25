require('dotenv').config();

module.exports = {
    mnemonic_phrase: process.env.MNEMONIC_PHRASE,
    default_mnemonic: process.env.DEFAULT_MNEMONIC,

    net_key: process.env.NET_KEY,
    network_path: process.env.NETWORK_PATH,

    ETHERSCAN__API_KEY: process.env.ETHERSCAN__API_KEY,
}