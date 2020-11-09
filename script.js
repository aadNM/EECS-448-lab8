function validPass(){
	var p1 = document.querySelector("#password1").value;
	var p2 = document.querySelector("#password2").value;

	if (p1.length < 8){
		alert("The passwords are not at least 8 characters long.");
	}else  if (p1 != p2){
		alert("The passwords entered don't match.");
	}
	if(p1 === p2){
		alert("Valid passwords.");
	}
}


//-----------------------------------------------------
var indexToShow = 0;
document.addEventListener("DOMContentLoaded", function(event) { 
  indexToShow = 1;
  show(indexToShow);

});
function prevImg(){
	indexToShow += 1;
	show(indexToShow);
}

function nextImg(){
	indexToShow -= 1;
	show(indexToShow);

}

function show(index){
	var slides = document.getElementsByClassName('slide');

	if(index < 1){
		indexToShow = slides.length;
	}else if(index > slides.length){
		indexToShow = 1;
	}

	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	slides[indexToShow - 1].style.display = "block";
	
}

//----------------------------------------------------------------------

function styleUpdate(){
	bGreen = document.getElementById('green-b').value;
	bRed = document.getElementById('red-b').value;
	bBlue = document.getElementById('blue-b').value;
	bWidth = document.getElementById('width-b').value;

	bgGreen = document.getElementById('green-bg').value;
	bgRed = document.getElementById('red-bg').value;
	bgBlue = document.getElementById('blue-bg').value;
	bgOpacity = document.getElementById('opacity-bg').value;
	
	bground = 'rgb(' + bgRed + ',' + bgGreen + ',' + bgBlue + ',' + (bgOpacity/100) + ')';
	border = bWidth + 'px' + ' dashed ' + 'rgb(' + bRed + ',' + bGreen + ',' + bBlue + ')';
	document.getElementById('container-to-change').style.backgroundColor = bground;
	document.getElementById('container-to-change').style.border = border;
}

//----------------------------------------------------------------------------

