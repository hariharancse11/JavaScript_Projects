var x = 0;
function add(){
	x++;
	document.getElementById('number').innerHTML=x;
	cheequ(x);
}

function sub(){
	x--;
	document.getElementById('number').innerHTML=x;
	cheequ(x);
}

function reset(){
	x=0;
	document.getElementById('number').innerHTML=x;
	cheequ(x);
}

function cheequ(x){
	if(x>0){
	document.getElementById("number").style.color = "green";
	}
	else if (x<0){
	
	document.getElementById("number").style.color = "red";
	}
	else{
		document.getElementById("number").style.color = "black";
	}
}
