//For time
var secs=0;
var mins=0;

//Amount of money you have
var money=0;

//Stops the game when stopper = 0
var stopper=1;

//Number of Miners
var amountminer=0;
var amountdriller=0;
var amountAdriller=0;
var amountLdriller=0;
var amountSdriller=0;

//Health of the Ore
var health=0;

//Gives more money
var bonus=1;

//Counts how many cash per second you get
var cashpersec=0;

//To stop from buying more upgrades 
var bought1=false;
var bought2=false;
var bought3=false;
var bought4=false;

//Starting the game
var ready=true;
var start=true;

//Finishing the game
var victory=false;
var time;

//Floating amount of money ganined
var opacityinterval;
var opacity = 0;

//Checking to see if the upgrades/miners are available to buy
setInterval(avail,1);

//Background audio

//To stop spamming the ore
function wait(){
	ready=true;
}

//Money gained appears as a text on the cursor
function appear(event){
	var x=event.clientX;
	var y=event.clientY;
	document.getElementById("number").style.opacity=1;
	document.getElementById("number").style.position="absolute";
	document.getElementById("number").style.left=x-50+"px";
	document.getElementById("number").style.top=y-50+"px";
	document.getElementById("number").innerHTML="+" + bonus;
	opacityinterval = setInterval(textmove,80);
}

//Stylize the text appearing
function textmove(){
	document.getElementById("number").style.opacity -= 0.05;
	opacity += 0.05;
	if (opacity >= 1) {
		clearInterval(opacityinterval);
	 }
}

//When you mine an ore
function add(event){
	if(ready&&(!victory)){
		if(mins+secs==0&&(start)){
			time=setInterval(timer,1000);
			start=false;
		}
		health = health + stopper;
		document.getElementById("health").style.width=200-health*70+"px";
		ready=false;
		setTimeout(wait, 1);

		if(health>2){
			appear(event);
			money += bonus;
			document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
			health=0;
			document.getElementById("health").style.width="200px";
		}	
	}
}

function avail(){
	
	//Upgrades
	if((money>49)&&(!bought1)){
        document.getElementById("me1").style.backgroundColor='#5ed85e';
		document.getElementById	("me1").style.color='#ffffff';
		document.getElementById("imgme1").style.opacity='1';
    }else{
		document.getElementById	("me1").style.backgroundColor='#404040';
		document.getElementById	("me1").style.color='#8e8e8e';
		document.getElementById("imgme1").style.opacity='0.3';
	}

    if((money>99)&&(!bought2)){
        document.getElementById("me2").style.backgroundColor='#5ed85e';
		document.getElementById	("me2").style.color='#ffffff';
		document.getElementById("imgme2").style.opacity='1';
    }else{
		document.getElementById	("me2").style.backgroundColor='#404040';
		document.getElementById	("me2").style.color='#8e8e8e';
		document.getElementById("imgme2").style.opacity='0.3';
	}

	if((money>199)&&(!bought3)){
        document.getElementById("me3").style.backgroundColor='#5ed85e';
		document.getElementById	("me3").style.color='#ffffff';
		document.getElementById("imgme3").style.opacity='1';
    }else{
		document.getElementById	("me3").style.backgroundColor='#404040';
		document.getElementById	("me3").style.color='#8e8e8e';
		document.getElementById("imgme3").style.opacity='0.3';
	}

	if((money>249)&&(!bought4)){
        document.getElementById("me4").style.backgroundColor='#5ed85e';
		document.getElementById	("me4").style.color='#ffffff';
		document.getElementById("imgme4").style.opacity='1';
    }else{
		document.getElementById	("me4").style.backgroundColor='#404040';
		document.getElementById	("me4").style.color='#8e8e8e';
		document.getElementById("imgme4").style.opacity='0.3';
	}

	//Win Condition
    if(money>999){
        document.getElementById("win1").style.backgroundColor='#5ed85e';
		document.getElementById	("win1").style.color='#ffffff';
		document.getElementById("imgwin").style.opacity='1';
	}else{
		document.getElementById("win1").style.backgroundColor='#404040';
		document.getElementById	("win1").style.color='#8e8e8e';
		document.getElementById("imgwin").style.opacity='0.3';
	}

	//Auto Clickers
	//Miner
	if(money>10*(amountminer+1)-1){
		document.getElementById("miner").style.backgroundColor='#5ed85e';
		document.getElementById	("miner").style.color='#ffffff';
		document.getElementById("imgm1").style.opacity='1';
	}else{
		document.getElementById("miner").style.backgroundColor='#404040';
		document.getElementById	("miner").style.color='#8e8e8e';
		document.getElementById("imgm1").style.opacity='0.3';
	}

	//Driller
	if(money>100+(50*amountdriller)-1){
		document.getElementById("driller").style.backgroundColor='#5ed85e';
		document.getElementById	("driller").style.color='#ffffff';
		document.getElementById("imgd1").style.opacity='1';
	}else{
		document.getElementById("driller").style.backgroundColor='#404040';
		document.getElementById	("driller").style.color='#8e8e8e';
		document.getElementById("imgd1").style.opacity='0.3';
	}

	//Amethyst Drill
	if(money>200+(100*amountAdriller)-1){
		document.getElementById("Adriller").style.backgroundColor='#5ed85e';
		document.getElementById	("Adriller").style.color='#ffffff';
		document.getElementById("imgAd1").style.opacity='1';
	}else{
		document.getElementById("Adriller").style.backgroundColor='#404040';
		document.getElementById	("Adriller").style.color='#8e8e8e';
		document.getElementById("imgAd1").style.opacity='0.3';
	}

	//Lunaris Quartz Drill
	if(money>400+(200*amountLdriller)-1){
		document.getElementById("Ldriller").style.backgroundColor='#5ed85e';
		document.getElementById	("Ldriller").style.color='#ffffff';
		document.getElementById("imgLd1").style.opacity='1';
	}else{
		document.getElementById("Ldriller").style.backgroundColor='#404040';
		document.getElementById	("Ldriller").style.color='#8e8e8e';
		document.getElementById("imgLd1").style.opacity='0.3';
	}

	//Solaris Citrine Drill
	if(money>600+(400*amountSdriller)-1){
		document.getElementById("Sdriller").style.backgroundColor='#5ed85e';
		document.getElementById	("Sdriller").style.color='#ffffff';
		document.getElementById("imgSd1").style.opacity='1';
	}else{
		document.getElementById("Sdriller").style.backgroundColor='#404040';
		document.getElementById	("Sdriller").style.color='#8e8e8e';
		document.getElementById("imgSd1").style.opacity='0.3';
	}

}

function miner(){
	if(money>=10*(amountminer+1)&&(!victory)){
		money-=10*(amountminer+1);
		amountminer+=1;
		cashpersec += 1;
		document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("costminer").innerHTML="Cost: " + (10*(amountminer+1));
		document.getElementById("amountofminers").innerHTML="Miner x " + amountminer;
		document.getElementById("cashpersecond").innerHTML="Cash per Second: " + cashpersec;
		setInterval(mineradd,1000/amountminer);
	}
}
function mineradd(){
	money+=1;
	document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
}

function driller(){
	if(money>=100+50*(amountdriller)&&(!victory)){
		money-=100+50*amountdriller;
		amountdriller+=1;
		cashpersec+=3;
		document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("costdriller").innerHTML="Cost: " + (100+50*(amountdriller));
		document.getElementById("amountofdrillers").innerHTML="Driller x " + amountdriller;
		document.getElementById("cashpersecond").innerHTML="Cash per Second: " + cashpersec;
		setInterval(drilleradd,1000/amountdriller);
	}
}
function drilleradd(){
	money+=3;
	document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
}

function Adriller(){
	if(money>=200+100*(amountAdriller) && (!victory)){
		money-=200+100*amountAdriller;
		amountAdriller+=1;
		cashpersec+=5;
		document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("costAdriller").innerHTML="Cost: " + (200+100*(amountAdriller));
		document.getElementById("amountofAdrillers").innerHTML="Amethyst Driller x " + amountAdriller;
		document.getElementById("cashpersecond").innerHTML="Cash per Second: " + cashpersec;
		setInterval(Adrilleradd,3000/amountAdriller);
	}
}
function Adrilleradd(){
	money+=15;
	document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
}

function Ldriller(){
	if(money>=400+200*(amountLdriller) && (!victory)){
		money-=400+200*amountLdriller;
		amountLdriller+=1;
		cashpersec += 10;
		document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("costLdriller").innerHTML="Cost: " + (400+200*(amountLdriller));
		document.getElementById("amountofLdrillers").innerHTML="Lunaris Quartz Driller x " + amountLdriller;
		document.getElementById("cashpersecond").innerHTML="Cash per Second: " + cashpersec;
		setInterval(Ldrilleradd,5000/amountLdriller);
	}
}
function Ldrilleradd(){
	money+=50;
	document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
}

function Sdriller(){
	if(money>=600+200*(amountSdriller)&&(!victory)){
		money-=600+200*amountSdriller;
		amountSdriller+=1;
		cashpersec += 15;
		document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("costSdriller").innerHTML="Cost: " + (600+250*(amountSdriller));
		document.getElementById("amountofSdrillers").innerHTML="Solaris Citrine Driller x " + amountSdriller;
		document.getElementById("cashpersecond").innerHTML="Cash per Second: " + cashpersec;
		setInterval(Ldrilleradd,10000/amountSdriller);
	}
}
function Sdrilleradd(){
	money+=150;
	document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
}

function upgrade1(){
    if((money>49)&&(!bought1)){
		bought1=true;
        bonus += 2;
        money = money - 50;
        document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("cost1").innerHTML="Upgrade cost: Bought";
		document.getElementById("extra").innerHTML="Extra money per ore: " + bonus;
	}
}

function upgrade2(){
    if((money>99)&&(!bought2)){
		bought2=true;
        bonus += 3;
        money = money - 100;
        document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("cost2").innerHTML="Upgrade cost: Bought";
		document.getElementById("extra").innerHTML="Extra money per ore: " + bonus;
	}
}

function upgrade3(){
    if((money>199)&&(!bought3)){
		bought3=true;
        bonus += 3;
        money = money - 100;
        document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("cost3").innerHTML="Upgrade cost: Bought";
		document.getElementById("extra").innerHTML="Extra money per ore: " + bonus;
	}
}

function upgrade4(){
    if((money>249)&&(!bought4)){
		bought4=true;
        bonus = bonus*2;
        money = money - 250;
        document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("cost4").innerHTML="Upgrade cost: Bought";
		document.getElementById("extra").innerHTML="Extra money per ore: " + bonus;
	}
}

function win(){
	if((money>999)&&(!victory)){
		victory=true;
		money -= 1000;
		stopper = 0;
		bonus = 0;
		money = 0;
		document.getElementById("amountofmoney").innerHTML = '<img src="moneybag.png" alt="money" width="50"> Money: ' + money;
		document.getElementById("cost5").innerHTML="Cost: Bought";
		clearInterval(time);
		document.getElementById("record").innerHTML= mins + " m, " + secs+ " s";
    }
}

function timer(){
	secs+=1;
	if (secs==60){
		secs-=60;
		mins+=1;
	}
	document.getElementById("time").innerHTML="Time: "+mins+" m, "+secs+" s";	
}