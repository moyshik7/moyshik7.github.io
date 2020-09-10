var allLesson, correct, ans, cid, name, text, code, question, q, qa;

q = false;

qa = false;

correct = 999;

ans = -1;

names = document.getElementById('names');

text = document.getElementById('text');

code = document.getElementById('code');

codeC = document.getElementById('code-c');

question = document.getElementById('question');

options = document.getElementById('options');

submits = document.getElementById('submit');

	var lessonID = {

	"10" : "html",

	"11" : "css"

}

main = () => {

	var id = getCookie("lessonID"); //use const

	id = "10001";

	if(id == "" || id == null){

		console.log("error");

	}else{

		let pid = id[0]+id[1];

		let lesson = lessonID[pid];

		console.log();

		let ass = eval(lesson);

		allLesson = ass[id];

	}

	question.style.borderColor = 'transparrnt';

	cid = 0;

	load();

}

load = () => {

	if(cid >= 0 && cid < allLesson.length){

		let lesson = allLesson[cid];

		q = false;

		qa = false;

		correct = 999;

		ans = -1;

		names.innerHTML=" ";

		text.innerHTML=" ";

		code.innerHTML=" ";

		options.innerHTML=" ";

		names.style.display="none";

		text.style.display="none"

		code.style.display="none"

		codeC.style.display="none"

		question.style.display="none"

		if(lesson.name != false){

			names.innerHTML=lesson.name;

			names.style.display="block";

		}

		if(lesson.text != false){

			text.innerHTML=lesson.text;

			text.style.display="block";

		}

		if(lesson.code != false){

			code.className = lesson.code.lang;

			code.innerText=lesson.code.code;

			code.style.display = "block";

			codeC.style.display="block";

		}

		if(lesson.question != false){

			q = true;

			if(lesson.question.type == "mcq"){

				question.style.display = "block";

				correct = lesson.question.correct;

				for(let x=0;x<lesson.question.options.length ; x++){

					let tpxt = lesson.question.options[x];

					let bttn = document.createElement('button');

					bttn.setAttribute('class','option');

					bttn.setAttribute('id',x);

					bttn.setAttribute('onclick','sel(this)');

					bttn.innerHTML=tpxt;

					options.appendChild(bttn);

				}

			}

		}

	}

	else{

		try{

			window.history.back();

		}catch(e){

			console.log(e);

		}

	}

}

next = () => {

	if(cid <= allLesson.length){

		if(q == true && qa != true){

			submit();

		}else{

			cid ++;

			load();

		}

	}else{

		

	}

}

prev = () => {

	if(cid < 0){

		console.log("error");

	}else{

		cid --;

		load();

	}

}

sel = (oob) => {

	ans = parseInt(oob.id);

}

submit = () => {

	if(ans == correct){

		qa = true;

		submits.style.backgroundColor = "#00cc99";

		question.style.borderColor = "transparent";

	}else{

		qa = false;

		submits.style.backgroundColor = "#ff6600";

		question.style.borderColor = "#ff6600";

	}

}
