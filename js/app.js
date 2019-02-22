
	var name = getname();
	console.log(user);
	alert('Welcome to Guessing game about me');
var attempt = 0
  var readyflag = getreadyflag();
	checkreadyflag(readyflag);
	var married = getmarried();
	checkmarried(married);
	var kid = getkid();
	checkkid(kid);
	var age = getage();
	for (i = 0; i < 4; i++)
	{checkage(age);
	}



	alert('Game Over!!!');


/* The function gets name of the user */
function getname() {
	user = window.prompt('What is your name?');
	return user;
};


/* The function prompts question to check national animal to user and returns the reply */
function getreadyflag() {
		readyflag = window.prompt('Are you ready to play guessing game about me?');
		return readyflag;
};


/* The function checks if user is interested in playing */
function checkreadyflag(readyflag){
	readyflag = this.readyflag;
	readyflag = readyflag.toLowerCase();
	var expectedvalue1 = 'y';
  var expectedvalue2 = 'yes';
	if (readyflag === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (readyflag === expectedvalue1 || readyflag === expectedvalue2)
  {
		alert('HOOOO!! Lets play the game');
	}
	else {
		alert('Please enter yes or y to play game');
	}
};

/* The function prompts user to enter age */
function getage() {
	age = window.prompt('Can you guess my age');
//checkage(age);
alert("inside getage")
  return age;
};

/* The function checks validates the age provided by user */
function checkage(age){
	age = this.age;
	var correctage = '50';
 
	if (age === null) {
		alert('No User Input. Thanking for Playing')
	}
  else if (age > 50) {
		alert('Try lesser number')
		verifyage();
	}
  else if (age < 50) {
		alert('Try higher number')
		verifyage();
	}
	else if (age === correctage) {
		alert('Congratulations!! '+ age +' is correct answer.')
    correctflag='Y';
	}
	else {
		alert('Ops!! '+ age +' is incorrect answer.Please try the game again');
	}
	//attempt++;
};

// function verifyage() {
// 	alert("inside verify age");
//   if (correctflag === 'Y' || attempt === 4)
//     {return;}
//   else
//   getage();
// }


function getmarried() {
	age = window.prompt('Am i married');
	return married;
};

function getkid() {
	age = window.prompt('Do you think i have kid');
	return kid;
};




/* The function checks validates the age provided by user */
function checkmarried(married){
	married = this.married;
  	married = married.toLowerCase();
	var expectedvalue3 = 'y';
  var expectedvalue4 = 'yes';

	if (married === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (married === expectedvalue3 || married === expectedvalue4) {
		alert('Congratulations!! your is answer is correct');
	}
	else {
		alert('Ops!! that is incorrect answer');
	}
};

/* The function checks validates the age provided by user */
function checkkid(kid){
	kid = this.kid;
	var correctkid = 'y';
	if (kid === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (kid === correctkid) {
		alert('Congratulations!! your is answer is correct');
	}
	else {
		alert('Ops!! that is incorrect answer');
	}
};
