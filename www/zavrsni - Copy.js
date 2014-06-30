window.onload = function (err) {

        var element = document.getElementById("sve");
        var outputString = "";
        for (i = 1; i < 8; i++) {
                outputString += "<tr name='treba'>";
                for (j = 1; j < 9; j++)

                outputString += "<td><input type='button'  name='dugme' onclick='slova(this.value)'></td>";

                outputString += "</tr>";

        }
		document.getElementById("joker").value = "Use Joker (" + leftJoker + ")";
		document.getElementById("gold").value= "Buy Gold (" + leftGold + ")"; 
        element.innerHTML = outputString;

        for (var m = 0; m < 56; m++) {
                document.getElementsByName("dugme")[m].value = makeid();
        }

}

var seconds = 60;

 
function secondPassed() {
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
                remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById('vrijeme').innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0 && !gotovo) {
                clearInterval(countdownTimer);
                document.getElementById('vrijeme').innerHTML = "Time up";
			
        } else {
                seconds--;
        }
}

var countdownTimer = setInterval('secondPassed()', 1000);

var out = "";
var count = 0;
var kliknuto = false;
function slova(value) {
		 
		if (br==true)
		{ 
		out = "";
		br=false;
		kliknuto=false;
		}
		if (seconds!=0){
        var el = document.getElementById("red");
         
                out += "<td name = 'celija'>";
                out += value;
                out += "</td>";
                count++;
                el.innerHTML = out;
        }
		else {
		alert("Time up!");
		}

}

 
var leftGold = 10;
function gold() {
	
     if ( confirm("Do you want to buy a joker? :) "))
	 {
		leftGold -= 5 ;
		leftJoker++;
		document.getElementById("gold").value= "Buy Gold (" + leftGold + ")"; 
		document.getElementById("joker").value= "Use Joker (" + leftJoker + ")"; 
	 }
	  

}
var leftJoker = 5;

function joker() {
		if (leftJoker!=0){
        leftJoker--;
		document.getElementById("joker").value = "Use Joker (" + leftJoker + ")";
		for (var m = 0; m < 56; m++) {
                document.getElementsByName("dugme")[m].value = makeid();
        }}
		else 
		alert("You don't have any jokers left!");

}
var rijec = "";
var br = false;
function obrisi() {
		document.getElementById("red").deleteCell(0);
		br=true;
   //     document.all.red.deleteCell(1);
    //    rijec.slice(0, -1);
//        for (var i = 0; i < document.getElementById("red").childNodes.length; i++)
  //      document.getElementsByName("celija")[i].innerHTML = rijec;

}

var gotovo = false;
var dodano = 0;
var score = 0;
function validiraj() {
var mydata = JSON.parse(data);
 
 
		var postoji = false;
        var druga = document.getElementById("red");
        for (var i = 0; i < document.getElementById("red").childNodes.length; i++)
		{
        rijec += document.getElementsByName("celija")[i].innerHTML;
		}
	 
		for (i=0;i<mydata.length;i++)
		if (mydata[i].name.toUpperCase() == rijec){
		postoji=true;
		}
		if (((document.getElementById("prvi").innerHTML) != "1. " + rijec) && ((document.getElementById("drugi").innerHTML) != "2. " + rijec) && ((document.getElementById("treci").innerHTML) != "3. " + rijec) && ((document.getElementById("cetvrti").innerHTML) != "4. " + rijec)){
        if (postoji==true) {
                druga += "<td id = 'tacno'>"
                document.getElementById("red").innerHTML = "<img class='correct' src='tacno.png'></td>";
                score += 100;
				
				document.getElementById("broj").innerHTML = score;
				
				if (dodano == 0) {
				document.getElementById("prvi").innerHTML += rijec;
				br = true;
				}
				else if (dodano==1) {
				document.getElementById("drugi").innerHTML += rijec;
				br = true;
				}
				else if (dodano==2) {
				document.getElementById("treci").innerHTML += rijec;
				br = true;
				}
				else if (dodano==3) {
				 
				document.getElementById("cetvrti").innerHTML += rijec;
				br = true;
				}
				else if (dodano==4) {
				document.getElementById("peti").innerHTML += rijec;
				br = true;
				if (seconds!=0){
				score = score + seconds *2;
			    document.getElementById("broj").innerHTML = score;
				seconds = 0;
				}
				leftGold += 10;
				document.getElementById("gold").value= "Buy Gold (" + leftGold + ")"; 
				alert("bravo :)");
				gotovo = true;
				}
				
				
				rijec = "";
				dodano++;
			//	for (var i = 0; i < document.getElementById("red").childNodes.length; i++)
			//	document.getElementsByName("celija")[i].innerHTML = rijec;
                //document.getElementById("ispod").deleteRow(0);
			
			}
		else {
                druga += "<td id = 'tacno'>"
                document.getElementById("red").innerHTML = "<img class='correct' src='wrong.png'></td>";
				br = true;
                rijec = "";
                //obrisi();
        }
		kliknuto = true;
		}
			else  {
			alert("You can't enter the same city twice! :( ");
			var obrisati = rijec.length;
			while(obrisati>0){
			obrisi();
			obrisati--;
			}
			rijec = "";
			}
			
}

function makeid() {
        var text = "";
        var possible = "AABCČĆDĐEEFGHIIJKLMNOOPQRSŠTUUVWXYZŽ";

        for (var i = 0; i < 8; i++)
        text = possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
}