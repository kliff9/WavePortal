(this.webpackJsonpwave=this.webpackJsonpwave||[]).push([[0],{33:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405260644442620000149190620001eb565b62000020919062000288565b600181905550620000746040518060400160405280601481526020017f4920414d20534d41525420434f4e54524143542e0000000000000000000000008152506001546200007a60201b620006881760201c565b6200032f565b6200011c8282604051602401620000939291906200019b565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200012060201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200015682620001cf565b620001628185620001da565b93506200017481856020860162000252565b6200017f816200031e565b840191505092915050565b620001958162000248565b82525050565b60006040820190508181036000830152620001b7818562000149565b9050620001c860208301846200018a565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000620001f88262000248565b9150620002058362000248565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200023d576200023c620002c0565b5b828201905092915050565b6000819050919050565b60005b838110156200027257808201518184015260208101905062000255565b8381111562000282576000848401525b50505050565b6000620002958262000248565b9150620002a28362000248565b925082620002b557620002b4620002ef565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b61118f806200033f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906109d1565b6100d9565b005b6100756104d4565b6040516100829190610e21565b60405180910390f35b6100a560048036038101906100a091906109a8565b61051f565b6040516100b29190610e21565b60405180910390f35b6100c3610537565b6040516100d09190610cfa565b60405180910390f35b42600f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610f3e565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610e01565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610f3e565b925050819055506102036040518060400160405280601681526020017f257320776176656420772f206d657373616765202573000000000000000000008152503383610724565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610888565b50604082015181600201555050606460015442446102e09190610f3e565b6102ea9190610f3e565b6102f49190611044565b60018190555061033b6040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a20256400000000000000000000815250600154610688565b603260015411610481576103846040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336107c3565b6000655af3107a40009050478111156103d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c990610dc1565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103f890610ce5565b60006040518083038185875af1925050503d8060008114610435576040519150601f19603f3d011682016040523d82523d6000602084013e61043a565b606091505b505090508061047e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047590610de1565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516104c9929190610e3c565b60405180910390a250565b60006105176040518060400160405280601781526020017f5765206861766520256420746f74616c20776176657321000000000000000000815250600054610688565b600054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561067f57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105e490611012565b80601f016020809104026020016040519081016040528092919081815260200182805461061090611012565b801561065d5780601f106106325761010080835404028352916020019161065d565b820191906000526020600020905b81548152906001019060200180831161064057829003601f168201915b505050505081526020016002820154815250508152602001906001019061055b565b50505050905090565b610720828260405160240161069e929190610d91565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085f565b5050565b6107be83838360405160240161073c93929190610d4c565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085f565b505050565b61085b82826040516024016107d9929190610d1c565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085f565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461089490611012565b90600052602060002090601f0160209004810192826108b657600085556108fd565b82601f106108cf57805160ff19168380011785556108fd565b828001600101855582156108fd579182015b828111156108fc5782518255916020019190600101906108e1565b5b50905061090a919061090e565b5090565b5b8082111561092757600081600090555060010161090f565b5090565b600061093e61093984610e9d565b610e6c565b90508281526020810184848401111561095657600080fd5b610961848285610fd0565b509392505050565b60008135905061097881611142565b92915050565b600082601f83011261098f57600080fd5b813561099f84826020860161092b565b91505092915050565b6000602082840312156109ba57600080fd5b60006109c884828501610969565b91505092915050565b6000602082840312156109e357600080fd5b600082013567ffffffffffffffff8111156109fd57600080fd5b610a098482850161097e565b91505092915050565b6000610a1e8383610c77565b905092915050565b610a2f81610f94565b82525050565b610a3e81610f94565b82525050565b6000610a4f82610edd565b610a598185610f00565b935083602082028501610a6b85610ecd565b8060005b85811015610aa75784840389528151610a888582610a12565b9450610a9383610ef3565b925060208a01995050600181019050610a6f565b50829750879550505050505092915050565b6000610ac482610ee8565b610ace8185610f1c565b9350610ade818560208601610fdf565b610ae781611131565b840191505092915050565b6000610afd82610ee8565b610b078185610f2d565b9350610b17818560208601610fdf565b610b2081611131565b840191505092915050565b6000610b38603483610f2d565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b9e602783610f2d565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c04600083610f11565b9150600082019050919050565b6000610c1e602983610f2d565b91507f4d7573742077616974203135207365636f6e6473206265666f7265207761766960008301527f6e6720616761696e2e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000606083016000830151610c8f6000860182610a26565b5060208301518482036020860152610ca78282610ab9565b9150506040830151610cbc6040860182610cc7565b508091505092915050565b610cd081610fc6565b82525050565b610cdf81610fc6565b82525050565b6000610cf082610bf7565b9150819050919050565b60006020820190508181036000830152610d148184610a44565b905092915050565b60006040820190508181036000830152610d368185610af2565b9050610d456020830184610a35565b9392505050565b60006060820190508181036000830152610d668186610af2565b9050610d756020830185610a35565b8181036040830152610d878184610af2565b9050949350505050565b60006040820190508181036000830152610dab8185610af2565b9050610dba6020830184610cd6565b9392505050565b60006020820190508181036000830152610dda81610b2b565b9050919050565b60006020820190508181036000830152610dfa81610b91565b9050919050565b60006020820190508181036000830152610e1a81610c11565b9050919050565b6000602082019050610e366000830184610cd6565b92915050565b6000604082019050610e516000830185610cd6565b8181036020830152610e638184610af2565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e9357610e92611102565b5b8060405250919050565b600067ffffffffffffffff821115610eb857610eb7611102565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610f4982610fc6565b9150610f5483610fc6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f8957610f88611075565b5b828201905092915050565b6000610f9f82610fa6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ffd578082015181840152602081019050610fe2565b8381111561100c576000848401525b50505050565b6000600282049050600182168061102a57607f821691505b6020821081141561103e5761103d6110d3565b5b50919050565b600061104f82610fc6565b915061105a83610fc6565b92508261106a576110696110a4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61114b81610f94565b811461115657600080fd5b5056fea2646970667358221220e1ab62ad1d05d5f71931e032f9a86896b76eedf63fd0f78967e22231bf79672e64736f6c63430008000033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906109d1565b6100d9565b005b6100756104d4565b6040516100829190610e21565b60405180910390f35b6100a560048036038101906100a091906109a8565b61051f565b6040516100b29190610e21565b60405180910390f35b6100c3610537565b6040516100d09190610cfa565b60405180910390f35b42600f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610f3e565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610e01565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610f3e565b925050819055506102036040518060400160405280601681526020017f257320776176656420772f206d657373616765202573000000000000000000008152503383610724565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610888565b50604082015181600201555050606460015442446102e09190610f3e565b6102ea9190610f3e565b6102f49190611044565b60018190555061033b6040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a20256400000000000000000000815250600154610688565b603260015411610481576103846040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336107c3565b6000655af3107a40009050478111156103d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c990610dc1565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103f890610ce5565b60006040518083038185875af1925050503d8060008114610435576040519150601f19603f3d011682016040523d82523d6000602084013e61043a565b606091505b505090508061047e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047590610de1565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516104c9929190610e3c565b60405180910390a250565b60006105176040518060400160405280601781526020017f5765206861766520256420746f74616c20776176657321000000000000000000815250600054610688565b600054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561067f57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105e490611012565b80601f016020809104026020016040519081016040528092919081815260200182805461061090611012565b801561065d5780601f106106325761010080835404028352916020019161065d565b820191906000526020600020905b81548152906001019060200180831161064057829003601f168201915b505050505081526020016002820154815250508152602001906001019061055b565b50505050905090565b610720828260405160240161069e929190610d91565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085f565b5050565b6107be83838360405160240161073c93929190610d4c565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085f565b505050565b61085b82826040516024016107d9929190610d1c565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085f565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461089490611012565b90600052602060002090601f0160209004810192826108b657600085556108fd565b82601f106108cf57805160ff19168380011785556108fd565b828001600101855582156108fd579182015b828111156108fc5782518255916020019190600101906108e1565b5b50905061090a919061090e565b5090565b5b8082111561092757600081600090555060010161090f565b5090565b600061093e61093984610e9d565b610e6c565b90508281526020810184848401111561095657600080fd5b610961848285610fd0565b509392505050565b60008135905061097881611142565b92915050565b600082601f83011261098f57600080fd5b813561099f84826020860161092b565b91505092915050565b6000602082840312156109ba57600080fd5b60006109c884828501610969565b91505092915050565b6000602082840312156109e357600080fd5b600082013567ffffffffffffffff8111156109fd57600080fd5b610a098482850161097e565b91505092915050565b6000610a1e8383610c77565b905092915050565b610a2f81610f94565b82525050565b610a3e81610f94565b82525050565b6000610a4f82610edd565b610a598185610f00565b935083602082028501610a6b85610ecd565b8060005b85811015610aa75784840389528151610a888582610a12565b9450610a9383610ef3565b925060208a01995050600181019050610a6f565b50829750879550505050505092915050565b6000610ac482610ee8565b610ace8185610f1c565b9350610ade818560208601610fdf565b610ae781611131565b840191505092915050565b6000610afd82610ee8565b610b078185610f2d565b9350610b17818560208601610fdf565b610b2081611131565b840191505092915050565b6000610b38603483610f2d565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b9e602783610f2d565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c04600083610f11565b9150600082019050919050565b6000610c1e602983610f2d565b91507f4d7573742077616974203135207365636f6e6473206265666f7265207761766960008301527f6e6720616761696e2e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000606083016000830151610c8f6000860182610a26565b5060208301518482036020860152610ca78282610ab9565b9150506040830151610cbc6040860182610cc7565b508091505092915050565b610cd081610fc6565b82525050565b610cdf81610fc6565b82525050565b6000610cf082610bf7565b9150819050919050565b60006020820190508181036000830152610d148184610a44565b905092915050565b60006040820190508181036000830152610d368185610af2565b9050610d456020830184610a35565b9392505050565b60006060820190508181036000830152610d668186610af2565b9050610d756020830185610a35565b8181036040830152610d878184610af2565b9050949350505050565b60006040820190508181036000830152610dab8185610af2565b9050610dba6020830184610cd6565b9392505050565b60006020820190508181036000830152610dda81610b2b565b9050919050565b60006020820190508181036000830152610dfa81610b91565b9050919050565b60006020820190508181036000830152610e1a81610c11565b9050919050565b6000602082019050610e366000830184610cd6565b92915050565b6000604082019050610e516000830185610cd6565b8181036020830152610e638184610af2565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e9357610e92611102565b5b8060405250919050565b600067ffffffffffffffff821115610eb857610eb7611102565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610f4982610fc6565b9150610f5483610fc6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f8957610f88611075565b5b828201905092915050565b6000610f9f82610fa6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ffd578082015181840152602081019050610fe2565b8381111561100c576000848401525b50505050565b6000600282049050600182168061102a57607f821691505b6020821081141561103e5761103d6110d3565b5b50919050565b600061104f82610fc6565b915061105a83610fc6565b92508261106a576110696110a4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61114b81610f94565b811461115657600080fd5b5056fea2646970667358221220e1ab62ad1d05d5f71931e032f9a86896b76eedf63fd0f78967e22231bf79672e64736f6c63430008000033","linkReferences":{},"deployedLinkReferences":{}}')},39:function(f,e,b){f.exports=b(58)},44:function(f,e,b){},46:function(f,e,b){},48:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),n=b(32),c=b.n(n),d=(b(44),b(19)),r=b(2),s=b.n(r),o=b(20),u=b(23),i=b(12),l=(b(46),b(33)),p=function(){var f=Object(a.useState)(""),e=Object(u.a)(f,2),b=e[0],n=e[1],c=Object(a.useState)(""),r=Object(u.a)(c,2),p=r[0],m=r[1],v="0xf1F7838a3e1939404aa3Fa868F0bDEF2F94EBdd8",g=l.abi,y=function(){var f=Object(o.a)(s.a.mark((function f(){var e,b,a,t;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=7;break}return console.log("Make sure you have metamask!"),f.abrupt("return");case 7:console.log("We have the ethereum object",b);case 8:return f.next=10,b.request({method:"eth_accounts"});case 10:0!==(a=f.sent).length?(t=a[0],console.log("Found an authorized account:",t),n(t),N()):console.log("No authorized account found"),f.next=17;break;case 14:f.prev=14,f.t0=f.catch(0),console.log(f.t0);case 17:case"end":return f.stop()}}),f,null,[[0,14]])})));return function(){return f.apply(this,arguments)}}(),w=function(){var f=Object(o.a)(s.a.mark((function f(e){var b,a,t;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=window,a=b.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,a.request({method:"eth_requestAccounts"});case 7:t=f.sent,console.log("Connected",t[0]),n(t[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(e){return f.apply(this,arguments)}}(),h=function(){var f=Object(o.a)(s.a.mark((function f(e){var b,a,t,n,c,d,r;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=window,!(a=b.ethereum)){f.next=24;break}return t=new i.a.providers.Web3Provider(a),n=t.getSigner(),c=new i.a.Contract(v,g,n),e.preventDefault(),f.next=9,c.getTotalWaves();case 9:return d=f.sent,console.log("Retrieved total wave count...",d.toNumber()),f.next=13,c.wave(p,{gasLimit:3e5});case 13:return r=f.sent,console.log("Mining...",r.hash),f.next=17,r.wait();case 17:return console.log("Mined -- ",r.hash),f.next=20,c.getTotalWaves();case 20:d=f.sent,console.log("Retrieved total wave count...",d.toNumber()),f.next=25;break;case 24:console.log("Ethereum object doesn't exist!");case 25:f.next=30;break;case 27:f.prev=27,f.t0=f.catch(0),console.log(f.t0);case 30:case"end":return f.stop()}}),f,null,[[0,27]])})));return function(e){return f.apply(this,arguments)}}(),x=Object(a.useState)([]),k=Object(u.a)(x,2),W=k[0],E=k[1],N=function(){var f=Object(o.a)(s.a.mark((function f(){var e,b,a,t,n,c,d;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=13;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),n=new i.a.Contract(v,g,t),f.next=8,n.getAllWaves();case 8:c=f.sent,d=c.map((function(f){return{address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message}})),E(d),f.next=14;break;case 13:console.log("Ethereum object doesn't exist!");case 14:f.next=19;break;case 16:f.prev=16,f.t0=f.catch(0),console.log(f.t0);case 19:case"end":return f.stop()}}),f,null,[[0,16]])})));return function(){return f.apply(this,arguments)}}();return Object(a.useEffect)((function(){var f;y();var e=function(f,e,b){console.log("NewWave",f,e,b),E((function(a){return[].concat(Object(d.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))};if(window.ethereum){var b=new i.a.providers.Web3Provider(window.ethereum).getSigner();(f=new i.a.Contract(v,g,b)).on("NewWave",e)}return function(){f&&f.off("NewWave",e)}}),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),t.a.createElement("div",{className:"bio"},"1. Get MetaMask ",t.a.createElement("br",null),"2. Connect Your Wallet ",t.a.createElement("br",null),"3. Write a Message to wave to yourself"),t.a.createElement("form",{onSubmit:h,className:"-form"},t.a.createElement("h1",null,"Wave"),t.a.createElement("input",{type:"text",name:"username",onChange:function(f){f.preventDefault(),m(f.target.value)},placeholder:"Write Your Message",className:"input-"}),t.a.createElement("button",{type:"submit",className:"bn15 "},"Wave at Self")),!b&&t.a.createElement("button",{className:"bn15 ",onClick:w},"Connect Wallet"),W.map((function(f,e){return t.a.createElement("div",{key:e,style:{backgroundColor:"OldLace",marginTop:"16px",padding:"8px"}},t.a.createElement("div",null,"Address: ",f.address),t.a.createElement("div",null,"Time: ",f.timestamp.toString()),t.a.createElement("div",null,"Message: ",f.message))}))))};c.a.render(t.a.createElement(p,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a48b2756.chunk.js.map