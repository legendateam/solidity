const ethers = require('ethers');

const { mnemonic_phrase } = require('./configs/configs');

(async () => {
    const hDNodeWallet = ethers.HDNodeWallet.fromPhrase(mnemonic_phrase);
    const msg = 'Yura Cheban 16.09.2023';

    const publicKey = hDNodeWallet.publicKey;
    console.log(publicKey, 'publicKey');
    const privateKey = hDNodeWallet.privateKey;
    console.log(privateKey, 'privateKey');
    const address = hDNodeWallet.address;
    console.log(address, 'address');

    const signature = await hDNodeWallet.signMessage(msg);
    console.log(signature, 'signature');

    // отримувач коли буде перевіряти мій меседж

    const signer = ethers.verifyMessage(msg, signature);

    if (signer === address) {
        console.log('Підпис перевірено і вірний.');
    } else {
        console.log('Підпис не вірний.');
    }
})();