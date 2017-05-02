function desplegar(){
	document.getElementById('burguer').style.left='0px';
}

function tancar(){
	document.getElementById('burguer').style.left="-75%";
}

function visible(){
	document.getElementById('pruebaloca').style.display="inline";
	document.getElementById('bgviscat').style.display="none";
	document.getElementById('bginviscat').style.display="inline";
}

function invisible(){
	document.getElementById('pruebaloca').style.display="none";
	document.getElementById('bgviscat').style.display="inline";
	document.getElementById('bginviscat').style.display="none";
}