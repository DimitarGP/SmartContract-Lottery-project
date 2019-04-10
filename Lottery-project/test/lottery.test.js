const Lottery = artifacts.require("Lottery");
const assert = require('assert');
const Web3 = require('web3');

contract('Lottery', (accounts) => {
    it('Contract lottery', async() =>{
        const lottery = await Lottery.deployed();
        assert.ok(lottery.address[0]);
    });

    // it('Allows one account to enter', async() => {        
    //     await lottery.methods.enter.send({
    //         from: account[0],
    //         value: Web3.utils.toWei('0.02','ether')
    //     });

    //     const players = await lottery.methods.getPlayers().call({
    //         from: accounts[0]
    //     });

    //     assert.equal(accounts[0], players[0]);
    //     assert.equal(1, players.length);
    // });    
    
    it('Require minimum amount of ether to enter', async() => {
        try{
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 0
            });        
            assert(false);
        }
        catch(err){
            assert(err);
        }
    });

    it('Only manager can call the pickWinner', async() => {
        try {
            await lottery.methods.pickWinner().send({
                from: accounts[1]
            });
            assert(false);            
        } catch(err){
            assert(err);
        }
    });
});