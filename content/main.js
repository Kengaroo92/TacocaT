document.getElementById("flipBtn").addEventListener("click", function () {

    //Here is what happens when the button is clicked.

    // Step 1 - Get the Data
    let inputWord = document.getElementById("reverseString").value;

    // Step 2 - Work with the Data
    let lowerInput = inputWord.toLowerCase();
    lowerInput = lowerInput.replace(" ", "");
    let reverseWord = ""

    //First is the Loop Variable followed by a ;.
    //Second part is how many times we are looping. Until the second part is false.
    //Third is what happens after each loop. ++ means add 1, -- = subtract 1.
    //[] indicates array position.
    //A string is an array of characters.
    //string word = [w][o][r][d]
    //               0  1  2  3
    //Without the - 1 you get index out of range exception.
    //Maybe there is a JavaScript method to make all the letters LowerCase.
    //Maybe you want to store four variables, the original input, that reversed, and the lowercase version of each for comparison.
    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
        reverseWord += lowerInput.charAt(loop);

    };
    let otherReverse = lowerInput.split("").reverse().join("");


    // Step 3 - Output the result
    if (lowerInput == reverseWord) {
        document.getElementById("reverseOutput").innerHTML = `The word that you entered: ${reverseWord} was changed to: ${otherReverse} is a Palindrome`;
    }
    else {
        document.getElementById("reverseOutput").innerHTML = `The word that you entered: ${reverseWord} was changed to: ${otherReverse} is not a Palindrome`;
    }

    document.getElementById("reverseString").addEventListener("keydown", function (e) {

        var character = (e.which) ? e.which : e.keyCode;
        console.log(character)

        if (character >= 97 && character <= 122 ||
            character >= 65 && character <= 90 || character == 8) {
            return true;
        }
        else {

            e.preventDefault();
            return false;
        }

    });


    //document.getElementById("reverseOutput").innerHTML = reverseWord;

})


document.getElementById("reverseString").addEventListener("keydown", function (evt) {

    var character = evt.which;
        console.log(character)

        if (character >= 97 && character <= 122 || character >= 65 && character <= 90) {
            return true;
        }
            else {

            evt.preventDefault();
            return false;
            }

        });

