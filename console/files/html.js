const html = {

	"10001" : [		{

			name : 'Language',

			text : 'Let\'s say you found a cute girl,<br/>So, you asked her out<br/>But she didn\'t reply anything',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'Understanding',

			text : 'Later you found out that she only speaks Portuguese 😩 <br/>Now What will you do ?<br/>You can\'t communicate with her',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'On the Internet',

			text : 'The same thing happens to the internet<br/>It can only understand one language.<br/>If you speak any other language it won\'t respond',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'HTML',

			text : 'The language of the internet is called <b>HTML</b><br><b>HTML</b/> stands for <b>Hyper Text Markup Language</b> <br>[ It\'s MARKUP language not Programming language ]',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'Short Quiz',

			text : 'What does HTML stand for ?',

			code : false,

			question : {

				type : 'mcq',

				options : [

					'Hi There Machine Learning',

					'Hyper Text Markup Language',

					'How To Make Lips pink',

					'Don\'t ask me'

				],

				correct : 1

			},

			image : false

		}

	],

	"10002" : [

		{

			name : 'Website',

			text : 'Have you ever wondered how a website is built ?<br/>It\'s actually super easy',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'Create website',

			text : 'All you have to do is create a file with <b>.html</b> extension.',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'On mobile',

			text : 'On mobile phone you will need a text editor or IDE to code HTML<br/><b>Acode, DroidEdit, AnWriter</b> are a few to name.<br/>Just create a new html file in your desired app &gt; Save it and you\'re done',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'On computer',

			text : 'On every computer the process is pretty much the same.<br/>Go to Notepad or TextEdit write \'Hello world\' and save the file with <b>.html</b>',

			code : false,

			question : false,

			image : false

		},

		{

			name : 'Short Quiz',

			text : 'How would you save a website file ?',

			code : false,

			question : {

				type : 'mcq',

				options : [

					".website",

					".web",

					".html",

					".com"

				],

				correct :2

			}

		},

		{

			name : 'Better',

			text : 'Now go to your html file and put the code below',

			code : {

				lang : 'language-html',

				code : '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>Hello World</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello World</h1>\n\t</body>\n</html>'

			},

			question : false,

			image : false

		},

		{

			name : 'Output',

			text : 'Save the file and open it with any browser.<br/>Does it look better ?'

		}

	]

}
