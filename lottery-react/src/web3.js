import Web3 from 'web3';

 const web3 = new Web3(new Web3.providers.HttpProvider(
     'https://ropsten.infura.io/v3/[infura_project_id]'
 ));


export default web3;
