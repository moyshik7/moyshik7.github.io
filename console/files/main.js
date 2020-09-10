var allLesson, correct, cid, name, text, code, question, q;

q = false;

correct = 999;

names = document.getElementById('names');

text = document.getElementById('text');

code = document.getElementById('code');

codeC = document.getElementById('code-c');

question = document.getElementById('question');

options = document.getElementById('options');

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

	cid = 2;

	load();

}

load = () => {

	if(cid >= 0 && cid < allLesson.length ){

		let lesson = allLesson[cid];

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

	}else{

		names.innerHTML=" ";

		text.innerHTML=" ";

		code.innerHTML=" ";

		options.innerHTML=" ";

		names.style.display="none";

		text.style.display="none"

		code.style.display="none"

		codeC.style.display="none"

		question.style.display="none"

	}

}
