function alg(){
    var amount = 3;
    var input;  // Used to hold user input
    const unsorted = [];  // Initialize an empty array
    
    while (amount != 0){  // Takes user input, ensuring user input a number
        input = prompt("Enter a number:");
        if (Object.is(NaN, parseInt(input))){
        }
        else{
            unsorted.push(parseInt(input));
            amount--;
        }
    }


    var min;
    for (var i = 0; i < unsorted.length; i++){  // Selection sort algorithm
        min = i;

        for (var j = i + 1; j < unsorted.length; j++){
            if (unsorted[j] < unsorted[min]){
                min = j;
            }
        }

        if (min != i){
            var temp = unsorted[min];
            unsorted[min] = unsorted[i];
            unsorted[i] = temp;
        }
    }

    document.getElementById("demo").innerHTML = unsorted;  // Print the array in ascending order

}
