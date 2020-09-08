main = () => {

	for(let i=0; i< html.length; i++){		let card = document.createElement('div');

		card.setAttribute('class',"card");

		let txt = "";

		let ourObj = html[i];

		if(i%2==0){

			txt += '<table border="0"><tr><td class="logo"><img src="./res/def';

			txt += ourObj.difficulty + '.jpg"></td><td class="title">';

			txt += ourObj.name +'</td></tr></table>';

		}else{

			txt += '<table border="0"><tr><td class="title">';

			txt += ourObj.name + '</td><td class="logo"><img src="./res/def';

			txt += ourObj.difficulty + '.jpg" ></td></tr></table>';

		}

		card.innerHTML = txt;

		document.getElementsByTagName("body")[0].appendChild(card);

		card = document.createElement('div');

		card.setAttribute("class","spc");

		document.getElementsByTagName("body")[0].appendChild(card);

	}

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
