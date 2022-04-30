var icon = document.getElementById('icon');
icon.onclick = function (){
	document.body.classList.toggle('mode');
    if (document.body.classList.contains('mode')) {
        icon.src = "sun.png";
    } else {
        icon.src ="moon.png";
    }
}