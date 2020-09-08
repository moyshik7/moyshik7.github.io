main = () => {

	for(let i=0; i< html.length; i++){		let ourObj = html[i];

		let txt = "";

		let card = document.createElement('div');

		card.setAttribute('class',"card");

		card.setAttribute('id',ourObj.id);

		//card.setAttribute('onclick','load()')

		if(i%2==0){

			txt += '<table border="0"><tr><td class="logo"><img src="./res/def'; // res for GitHub .res for local

			txt += ourObj.difficulty + '.jpg"></td><td class="title">';

			txt += ourObj.name +'</td></tr></table>';

		}else{

			txt += '<table border="0"><tr><td class="title">';

			txt += ourObj.name + '</td><td class="logo"><img src="./res/def'; // res for GitHub .res for local

			txt += ourObj.difficulty + '.jpg" ></td></tr></table>';

		}

		card.innerHTML = txt;

		document.getElementsByTagName("body")[0].appendChild(card);

		card = document.createElement('div');

		card.setAttribute("class","spc");

		document.getElementsByTagName("body")[0].appendChild(card);

	}

	

	let cards = document.getElementsByClassName('card');

	for(let i=0; i<cards.length; i++){

		cards[i].addEventListener('click',function(){load(this);});

	}

}

load = (seen) => {

	setCookie("lessonID",seen.id);

	window.location.href = "/console";

}

var html = [

	{

		id : "10001",

		name : "Introduction",

		difficulty : 0,

		pro : false

	},

	{

		id : "10002",

		name : "Tags",

		difficulty : 1,

		pro : false

	},

	{

		id : "10003",

		name : "Argumentss",

		difficulty : 2,

		pro : false

	},

	{

		id : "10004",

		name : "Casting",

		difficulty : 3,

		pro : false

	},

	{

		id : "10001",

		name : "Mario",

		difficulty : 4,

		pro : true

	},

	{

		id : "10001",

		name : "Pardon",

		difficulty : 5,

		pro : true

	}

];
