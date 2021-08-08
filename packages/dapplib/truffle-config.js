require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle saddle horn harvest cricket slot gate'; 
let testAccounts = [
"0x57367e85fe9d2e0da5b22504bcf1c94113975f52039dd1a52dad6b9d8b70171b",
"0x9bc42dc5e9f27620db842b0bb012084961e17785b3a8503fba5fbb1fc3648826",
"0xb26d2fc48450eaddf727180f76f32b4ccb9a54673f8d1498bd3d1d6390d745f8",
"0x9b3822855b43775696b4bb3b72879539ca844cf42d431755004b28e8f5d24255",
"0x02a636814e6fbd8d798aa21d7aaa12952c898385d97b7cd20f2ba91c8e47be2e",
"0x5031ee67cb10535f78074ba66102164e9fed2cd4537d8e64cea0263ef4249a88",
"0xb681a0af593e2ba236a55634a64a14d2c86130bc66f81bd74e7f761f0056b5b1",
"0x40c01187b1f98689fcb5ebc038c4ccd7d91c31da548120e2f2c96eb225d14a8b",
"0x9c8be053189554ab617dded312de6c7a9ba059e9fa20ef569e43a0050efb2d4c",
"0x0b529506564d7d5a00479999112b7d4265be428414d1491a2d0ce079c439f310"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

