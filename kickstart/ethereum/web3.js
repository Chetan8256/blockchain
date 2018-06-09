import Web3 from 'web3';

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
    // We are in browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are not in browser *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/8jX6ZLC5PFoV28QKLlRi"
    );
    web3 = new Web3(provider);
}


export default web3;