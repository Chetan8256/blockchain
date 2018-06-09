const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'hour type curve provide strategy vast nice misery husband buyer grow add',
    'https://rinkeby.infura.io/8jX6ZLC5PFoV28QKLlRi'
);

//0xBb9176b59EaF3459de52E36D1a3af566913fC35c

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    //console.log(bytecode);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log(interface);
    console.log('contract deployed to ', result.options.address);
};

deploy();
