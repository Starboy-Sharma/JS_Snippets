function decimaltoBinary(number) {
     
    let binary_code = [], rem;

    while (number > 1 ) {
        rem = parseInt(number % 2);
        number = parseInt(number / 2);

        binary_code.push(rem);

        if (number <= 15 && (number == 0 || number == 1)) {
            binary_code.push(number)
        }
    }

    
    binary_code = binary_code.reverse().join('')
    return binary_code;
 }

 function count_one(binString) {

    let str = '0' + binString + '0';
    let indices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === "0") indices.push(i);
    }

    let diff, counts = [];
    let len = indices.length;
    let last = len - 1;
    for (let j = 0; j < len; j++)
    {

        if (j !== last) {

            // console.log(indices[j + 1], indices[j])

            diff = indices[j + 1] - indices[j];
            counts.push(diff);
        }

        
    }
    
    return Math.max(...counts) - 1;
}
