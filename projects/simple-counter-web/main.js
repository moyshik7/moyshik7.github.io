let x = 0;
let m = document.getElementById('main');
increase = () => {
	x++ ;
	m.innerHTML = x;
}
reset = () => {
	x = 0;
	m.innerHTML = x;
}