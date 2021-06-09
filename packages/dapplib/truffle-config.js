require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool response situate coil grace sister army genre'; 
let testAccounts = [
"0xb7ef5117566186e9831811410b3244018735689cae6064db84078c8caf542387",
"0xc5fc87827057998912af868950481cc923bfb9fe6a9ba95e5f11219669572076",
"0x4be4f3e775106c3e46585d251459c9df77d251a35f59cc29da1391fce6641ff4",
"0x6b7b6947c6aba6c5e1029cb08f04a64568aa8adbb4f1ef1486989810cbfe450f",
"0xe2a741033f3c6dafdb7a8984ad16f8edc7defa1fe759811d2197fea60c6d2bd4",
"0xab531b4eee98fef4a75858fcd8ae50b66009bc26649a790029ac2b375cc763ed",
"0xa0cb48b0a861b3465ae7bbf3457f7d6154fba01ae1590a23bf54e23de15d8d86",
"0xbe39479e85a612f909ed74d446c45146695deee19a8a13a7c756382e7e33a9d8",
"0xd1586f645123a110f87f725edbb12ba703f1df11edc2aa09befed45132edae29",
"0x1029dd42ce9fcb6e38eb18f29998ad44a7157665a2e746777776d5c287b1e6ac"
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

