var fs = require('fs');

fs.readFile('data.txt',(err, data)=> {
	if(err) throw err;
	var numbers = data.toString().split('\r\n').map(number=>parseInt(number,10));
	var filtered = numbers.filter(function(item, pos){
		return (numbers.indexOf(item) === pos)
	});
	
	console.log(filtered.length);
	var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
	var result3 = calc3(filtered);
	var result2 = calc2(filtered);
	result2.forEach(line=>logStream.write(line))
	result3.forEach(line=>logStream.write(line))

	//var resultn = calcn
	
});

function isWon(sum) {
	return (sum%100 === 0);
}

function isWon2(sum) {
	return ((sum%100 === 0) && (sum<1001));
}

function calc2(numbers) {
	//var file = fs.createWriteStream('result.txt');
	var result = [];
	numbers.forEach(function(a){
		numbers.forEach(function(b){

			var sum = a+b;
			if (isWon(sum)) {
				
				//console.log([a,b], sum);
				
				result.push(a.toString() + ' + ' + b.toString() + ' = ' + sum + '\r\n');
				//result[[a,b,c].map(num=>num.toString())] = sum;
				
			} else {
				//console.log('-');
			}

		})
	});
	return result;
	//file.end();
}


function calc3(numbers) {
	
	var result = [];
	numbers.forEach(function(a){
		numbers.forEach(function(b){
			numbers.forEach(function(c){
				var sum = a+b+c;
				if (isWon(sum)) {
					
					result.push(a.toString() + ' + ' + b.toString() + ' + ' + c.toString() + ' = ' + sum + '\r\n');
					//result[[a,b,c].map(num=>num.toString())] = sum;
					
				} else {
					//console.log('-');
				}
			})
		})
	});
	return result;
}



function sum() {
	//return a+b+c;
}

//var data = require('data.txt');