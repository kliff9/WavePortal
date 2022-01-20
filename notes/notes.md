// const accounts = await ethereum.request({ method: "eth_accounts" });\\

So, we use that special method eth_accounts to see if we're authorized to access any of the accounts in the user's wallet. One thing to keep in mind is that the user could have multiple accounts in their wallet. In this case, we just grab the first one.

// const connectWallet = async () => { \\

In this case, I use the eth_requestAccounts function because I'm literally asking Metamask to give me access to the user's wallet.
On line 67, I also added a button so we can call our connectWallet function. You'll notice I only show this button if we don't have currentAccount

// const provider = new ethers.providers.Web3Provider(ethereum); \\

ethers is a library that helps our frontend talk to our contract. A "Provider" is what we use to actually talk to Ethereum nodes. Remember how we were using Alchemy to deploy? Well in this case we use nodes that Metamask provides in the background to send/receive data from our deployed contract.
// const signer = provider.getSigner(); \\

A Signer in ethers is an abstraction of an Ethereum Account, which can be used to sign messages and transactions and send signed transactions to the Ethereum Network to execute state changing operations.

// Alchemy \\
Alchemy essentially helps us broadcast our contract creation transaction so that it can be picked up by miners as quickly as possible. Once the transaction is mined, it is then broadcasted to the blockchain as a legit transaction.

// hre.ethers.utils.parseEther("0.1"), hre.ethers.utils.formatEther(contractBalance) \\
The magic is on hre.ethers.utils.parseEther("0.1"),. This is where I say, "go and deploy my contract and fund it with 0.1 ETH". This will remove ETH from my wallet, and use it to fund the contract. That's it.
I then do hre.ethers.utils.formatEther(contractBalance) to test out to see if my contract actually has a balance of 0.1. I use a function that ethers gives me here called getBalance and pass it my contract's address!

// const provider = new ethers.providers.Web3Provider(window.ethereum) \\

A Web3Provider wraps a standard Web3 provider, which is
what MetaMask injects as window.ethereum into each page

// const signer = provider.getSigner() \\

The MetaMask plugin also allows signing transactions to
send ether and pay to change state within the blockchain.
For this, you need the account signer...

// ethers.Contract \\

A Contract is an abstraction of code that has been deployed to the blockchain. A Contract may be sent transactions, which will trigger its code to be run with the input of the transaction data

// wavePortalContract.on("NewWave", onNewWave); \\

Receive an event when ANY transfer occurs / Emitted on every block change
The event object contains the verbatim log data, the
EventFragment and functions to fetch the block,
( This is super powerful. It lets us create web apps that update in real-time :). )
// .off \\
Remove a listener for the eventName event. If no listener is provided, all listeners for eventName are removed.
