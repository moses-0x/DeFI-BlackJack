const decimals = 10 ** 18;
var details;

const blackjackAddress = "0xaf117063543f0FEc7147dD0300D8DF8D03CfD059";


  
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_oracle",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bet",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "result",
				"type": "bool"
			}
		],
		"name": "NewGame",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Swap",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CHIPZ",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_Double",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_Hit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_Stand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_play",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "autoWithdrawBuffer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "betAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chipz",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "convertETHtoExactERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dividends",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donateEther",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeTier",
		"outputs": [
			{
				"internalType": "uint24",
				"name": "",
				"type": "uint24"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "gamestatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getEstimatedETHforERC20",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isPlayerActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minBet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "payoutAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "readCards",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "readPower",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requiredHouseBankroll",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setChipsAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setDividendsAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxBet",
				"type": "uint256"
			}
		],
		"name": "setMaxBet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minBet",
				"type": "uint256"
			}
		],
		"name": "setMinBet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requiredHouseBankroll",
				"type": "uint256"
			}
		],
		"name": "setRequiredHouseBankroll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapRouter",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAllToOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

//load metamask
let provider;
window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
const signer = provider.getSigner();

//load bj contract
const blackjackCaller = new ethers.Contract(blackjackAddress, abi, provider);
const blackjackContract = new ethers.Contract(blackjackAddress, abi, signer);


async function connect() {
	console.log("Attempting to connect to wallet...");
	await ethereum.request({ method: 'eth_requestAccounts' });
	getAccount();

}

async function getAccount() {
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const _account = accounts[0];
	//console.log("Wallet connected to: ", _account)
	if (accounts != 0) {
		document.getElementById("btn-connect").innerText = "CONNECTED";
	}
}

getAccount();





async function main() {
    //check eth balance
    const balance = parseFloat(ethers.utils.formatEther(await provider.getBalance(blackjackAddress))).toFixed(6);
    document.getElementById("poolbalance").innerText = "Pool Balance: " + balance + " ETH";

    //check wallet balance
    const walletBalance = parseFloat(ethers.utils.formatEther(await provider.getBalance(await signer.getAddress()))).toFixed(6);
    //update balance on page
    document.getElementById("balance").innerText = "Wallet Balance: " + walletBalance + " ETH";

	///get min bet
	const minBet = await blackjackCaller.minBet();
	document.getElementById("minbet").innerText = "Min Bet: " + ethers.utils.formatEther(minBet) + " ETH";
	//get max bet
	const maxBet = await blackjackContract.maxBet();
	document.getElementById("maxbet").innerText = "Max Bet: " + ethers.utils.formatEther(maxBet) + " ETH";


    getGameStatus();

    
}



async function convertCard(value){
  //use this to convert card values to readable values
  /*
        cardsPower[0] = 11; // aces
        cardsPower[1] = 2;
        cardsPower[2] = 3;
        cardsPower[3] = 4;
        cardsPower[4] = 5;
        cardsPower[5] = 6;
        cardsPower[6] = 7;
        cardsPower[7] = 8;
        cardsPower[8] = 9;
        cardsPower[9] = 10;
        cardsPower[10] = 10; // j
        cardsPower[11] = 10; // q
        cardsPower[12] = 10; // k
  */
  var power = value  % 13;
  var suit = Math.floor(value / 13);

  //calculate suit
  if(suit == 0){
    card = "s";
  }else if(suit == 1){
    card = "h";
  }else if(suit == 2){
    card = "d";
  }else if(suit == 3){
    card = "c";
  }
  else{
    card = "error";
  }

  //calculate power
  if(power == 0){
    card = "a" + card;
  }
  else if(power == 1){
    card = "2" + card;
  }
  else if(power == 2){
    card = "3" + card;
  }
  else if(power == 3){
    card = "4" + card;
  }
  else if(power == 4){
    card = "5" + card;
  }
  else if(power == 5){
    card = "6" + card;
  }
  else if(power == 6){
    card = "7" + card;
  }
  else if(power == 7){
    card = "8" + card;
  }
  else if(power == 8){
    card = "9" + card;
  }
  else if(power == 9){
    card = "10" + card;
  }
  else if(power == 10){
    card = "j" + card;
  }
  else if(power == 11){
    card = "q" + card;
  }
  else if(power == 12){
    card = "k" + card;
  }


  return card;

}

///function to get total power of cards
async function getPower(cards){
  var totalPower = 0;
  var aces = 0;
  for (var i = 0; i < cards.length; i++) {
    var power = cards[i] % 13;
    if(power == 0){
      aces++;
    }
    else if(power == 10 || power == 11 || power == 12){
      totalPower += 10;
    }
    else{
      totalPower += power + 1;
    }
  }
  for (var i = 0; i < aces; i++) {
    if(totalPower + 11 > 21){
      totalPower += 1;
    }
    else{
      totalPower += 11;
    }
  }
  return totalPower;
}



async function loadCards(){
    const cards = await blackjackContract.readCards();
    
    // load card into html using this <card-t cid=0></card-t>
    //insert card to html in player-cards div
    //clear old cards first
    document.getElementById("player-cards").innerHTML = "";
    document.getElementById("dealer-cards").innerHTML = "";


    //loop through player cards

    for(var i = 0; i < cards[0].length; i++){
      var card = await convertCard(cards[0][i]);
      var cardElement = document.createElement("card-t");
      cardElement.setAttribute("cid", card);
      document.getElementById("player-cards").appendChild(cardElement);
    }

    //loop through dealer cards
    for(var i = 0; i < cards[1].length; i++){
      var card = await convertCard(cards[1][i]);
      var cardElement = document.createElement("card-t");
      cardElement.setAttribute("cid", card);
      document.getElementById("dealer-cards").appendChild(cardElement);
    }

    //load power
    var playerPower = await getPower(cards[0]);
    var dealerPower = await getPower(cards[1]);
    document.getElementById("player-score").innerText = playerPower;
    document.getElementById("dealer-score").innerText = dealerPower;
    
}


async function getGameStatus() {
    const gameStatus = await blackjackContract.gamestatus(signer.getAddress());
     //1 = Player Turn, 2 = Player Blackjack!, 3 = Dealer Blackjack!, 4 = Push, 5 = Game Finished. Bets resolved.

    if(gameStatus == 0) {
        document.getElementById("result").innerText = "Place a bet to start a game.";
    } 
    else if(gameStatus == 1) {
        loadCards();
        document.getElementById("result").innerText = "Player Turn.";
    }
    else if(gameStatus == 2) {
        loadCards()
        document.getElementById("result").innerText = "Player Blackjack!";
    }
    else if(gameStatus == 3) {;
        loadCards();
        document.getElementById("result").innerText = "Dealer Blackjack!";
    }
    else if(gameStatus == 4) {
        loadCards();
        document.getElementById("result").innerText = "Push.";
    }
    else if(gameStatus == 5) {
        await loadCards();

        //if player-score is higher than dealer-score, player wins
        var playerPower = parseInt(document.getElementById("player-score").innerText);
        var dealerPower = parseInt(document.getElementById("dealer-score").innerText);


        if(playerPower > dealerPower && playerPower <= 21){
          document.getElementById("result").innerText = "Player Wins!";
		  console.log("player wins");
          
        }
        else if(playerPower < dealerPower && dealerPower > 21){
          document.getElementById("result").innerText = "Player Wins!";

        }
        else if(playerPower == dealerPower){
          document.getElementById("result").innerText = "Push.";
        }
        else{
          document.getElementById("result").innerText = "Dealer Wins :(";
        }

    }
        
}

async function bet() {
    // get value from input
    const betAmount = document.getElementById("bet-amount").value;


    //call bet function
    const betTx = await blackjackContract._play({value: ethers.utils.parseEther(betAmount), gasLimit: 950000});
    console.log("Bet tx: ", betTx.hash);


}

async function hit() {
    //call hit function
    const hitTx = await blackjackContract._Hit({gasLimit: 950000});
    console.log("Hit tx: ", hitTx.hash);
}

async function stand() {
    //call stand function
    const standTx = await blackjackContract._Stand({gasLimit: 950000});
    console.log("Stand tx: ", standTx.hash);
}

async function double() {
    //call doubleDown function
    const betAmount = await blackjackContract.betAmount(signer.getAddress());
    console.log("Bet Amount: ", betAmount.toString());
    const doubleDownTx = await blackjackContract._Double({value: betAmount.toString(), gasLimit: 950000});
    console.log("Double Down tx: ", doubleDownTx.hash);
}





//async loop to update data every 2 second
async function loop() {
  //update data
  await main();
  //wait 2 second
  await new Promise(r => setTimeout(r, 1000));
  //loop
  loop();
}


loop();