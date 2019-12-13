const electron = require('electron');

const display = document.getElementById('calc-display')
let calc_parser_feed = ''

let memory = []

function ready(){
	for (var i = ['0','1', '2', '3', '4', '5','6', '7', '8', '9', '-', '=', '+', '/', 'x', '.', '%', 'pm', 'sqrt', 'sqd', 'rec', 'c', 'ce', 'bs'].length - 1; i >= 0; i--) {
		const id = ['0','1', '2', '3', '4', '5','6', '7', '8', '9', '-', '=', '+', '/', 'x', '.', '%', 'pm', 'sqrt', 'sqd', 'rec', 'c', 'ce', 'bs'][i];
		document.getElementById(id).addEventListener('click', function(event){
			if(id=='sqd'){
				calc_parser_feed += '**2';
				display.innerHTML = calc_parser_feed;
			}else if(id=='sqrt'){
				calc_parser_feed = Math.sqrt(eval(calc_parser_feed));
				display.innerHTML = calc_parser_feed;
			}else if(id=='pm'){
				calc_parser_feed = '-' + calc_parser_feed;
				display.innerHTML = calc_parser_feed;
			}else if(id=='c'){
				calc_parser_feed = '';
				display.innerHTML = calc_parser_feed;
			}else if(id=='bs'){
				calc_parser_feed = calc_parser_feed.slice(0, calc_parser_feed.length-1);
				display.innerHTML = calc_parser_feed;
			}else if(id=='ce'){
				display.innerHTML = '';
			}else if(id=='%'){
				calc_parser_feed = eval(calc_parser_feed)/100
				display.innerHTML = calc_parser_feed;
			}else if(id=='='){
				let sol = eval(calc_parser_feed);
				sol = parseInt(sol*100)/100;
				display.innerHTML = sol;
				calc_parser_feed = sol;
			}else{
				if(id=='x'){calc_parser_feed += '*';}
				else{calc_parser_feed += id;}
				display.innerHTML = calc_parser_feed;
			}
		})
	}
}

function exit(){window.close();}

ready();