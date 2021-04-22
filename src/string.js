// get the count of a word repeat in a string

function potatoes(str) {
	
	const REGEX = /potato/g; // g means global which means it will count all the occurence 
	
	const count = (str.match(REGEX) || []).length;
	
	return count;
}

potatoes('potatoespotatoesapple') // 2 - potatoes string

// check a string contains lower case letter
function getHiddenWord(str) {
   const REGEX = /[a-z]/
   let amongUs = '';
   [...str].map(s => {
      console.log(s);
     if (s.match(REGEX)) {
        amongUs += s;
     }
   });
  
  
  return amongUs;
}

getHiddenWord('HHHcatHHH');


// replace


// replaceAll


// indexOf


// includes
