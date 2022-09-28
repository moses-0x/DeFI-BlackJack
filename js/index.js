const decimals = 10 ** 18;
var details;

const blackjackAddress = "0x7A0722cBaA59841D119077dBbcD315edC03F0075";


  
const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "_Double",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "_Hit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "_play",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "_Stand",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "donateEther",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "bet",
				"type": "uint256"
			},
			{
				"indexed": false,
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
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_oracle",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawAllEther",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "betAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "gamestatus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isActive",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isPlayerActive",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "payoutAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "readCards",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "readPower",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

//load metamask
let provider;
window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
const signer = provider.getSigner();

//load bj contract
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
        document.getElementById("result").innerText = "Start Game by placing a bet";
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
        var playerPower = document.getElementById("player-score").innerText;
        var dealerPower = document.getElementById("dealer-score").innerText;

        if(playerPower > dealerPower && playerPower <= 21){
          document.getElementById("result").innerText = "Player Wins!";
          
        }
        else if(playerPower < dealerPower && dealerPower > 21){
          document.getElementById("result").innerText = "Player Wins!";
        }
        else if(playerPower == dealerPower){
          document.getElementById("result").innerText = "Push.";
        }
        else{
          document.getElementById("result").innerText = "Dealer Wins :D";
        }

    }
        
}

async function bet() {
    // get value from input
    const betAmount = document.getElementById("bet-amount").value;

    //make sure bet is less than walllet balance >= than min bet of 0.001 and <= max bet of 0.1
    const walletBalance = await provider.getBalance(signer.getAddress());

    if (betAmount < 0.001 || betAmount > 0.1) {
        alert("Bet must be between 0.001 and 0.1 ETH");
        return;
    }

    if (betAmount > ethers.utils.formatEther(walletBalance)) {
        alert("Bet must be less than wallet balance");
        return;
    }


    //call bet function
    const betTx = await blackjackContract._play({value: ethers.utils.parseEther(betAmount), gasLimit: 750000});
    console.log("Bet tx: ", betTx.hash);


}

async function hit() {
    //call hit function
    const hitTx = await blackjackContract._Hit({gasLimit: 750000});
    console.log("Hit tx: ", hitTx);
}

async function stand() {
    //call stand function
    const standTx = await blackjackContract._Stand({gasLimit: 750000});
    console.log("Stand tx: ", standTx);
}

async function double() {
    //call doubleDown function
    const betAmount = await blackjackContract.betAmount(signer.getAddress());
    console.log("Bet Amount: ", betAmount.toString());
    const doubleDownTx = await blackjackContract._Double({value: betAmount.toString(), gasLimit: 750000});
    console.log("Double Down tx: ", doubleDownTx);
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