let inn = document.getElementsByClassName('iin');
let num = document.getElementsByClassName('num');
let sett = document.getElementById('sett');
let cd = document.getElementById('cd');
let fin = document.getElementById('finished');
let tg;
start = () => {
	let now = new Date();
	let d = {};
	try{
		if(inn[0].value == "" || inn[1].value == "" || inn[2].value == "" || inn[3].value == "" ){
			if(inn[0].value == ""){
				inn[0].value = 0;
			}
			if(inn[1].value == ""){
				inn[1].value = 0;
			}
			if(inn[2].value == ""){
				inn[2].value = 0;
			}
			if(inn[3].value == ""){
				inn[3].value = 0;
			}
			
			if(inn[0].value == "0" && inn[1].value == "0" && inn[2].value == "0" && inn[3].value == "0" ){
				inn[0].value = 0;
				inn[1].value = 0;
				inn[2].value = 0;
				inn[3].value = 10;
			}
			
			d.day = parseInt(inn[0].value);
			d.hr = parseInt(inn[1].value);
			d.min = parseInt(inn[2].value);
			d.sec = parseInt(inn[3].value);
		}
		else{
			d.day = parseInt(inn[0].value);
			d.hr = parseInt(inn[1].value);
			d.min = parseInt(inn[2].value);
			d.sec = parseInt(inn[3].value);
		}
		if(d.day >= 0 && d.hr >= 0 && d.min >= 0 && d.sec >= 0){
			let y = now.getTime() + (((d.day*24 + d.hr)*60 + d.min)*60 + d.sec)*1000;
			tg = new Date(y);
			let p = setInterval(() => {
				sett.style.display="none";
				cd.style.display="block";
				fin.style.display="none";
				let n = new Date();
				let d,h,m,s;
				let ms = tg.getTime() - n.getTime();
				if(ms > 0 ){
					d = Math.floor(ms/(24*60*60*1000));
					ms = ms - d*24*60*60*1000;
					h = Math.floor(ms/(60*60*1000));
					ms = ms - h*60*60*1000;
					m = Math.floor(ms/(60*1000));
					ms = ms - m*60*1000;
					s = Math.floor(ms/1000);
					num[0].innerHTML=d;
					num[1].innerHTML=h;
					num[2].innerHTML=m;
					num[3].innerHTML=s;
				}else{
					clearInterval(p);
					timeUp();
				}
			}, 1000);
		}
	}catch(err){
		console.log(err);
	}
}
timeUp = () => {
	fin.style.display="block";
	sett.style.display="none";
	cd.style.display="none";
	document.getElementsByTagName('body')[0].style.paddingTop="300px";
}