// problem1();
problem2();

//Write a JavaScript function that accepts a sentence of words all in lowercase,
// and returns every other word in all caps. Hint: see toUppercase()
// ex. in a galaxy far far away -> in A galaxy FAR far AWAY
function problem1()
{
    let lowercaseString = prompt("type a sentence");
    everyOtherUppercase(lowercaseString);
    function everyOtherUppercase(string)
    {
        let words = string.split(" ");
        // return words
        for (var i=0;i<words.length;i++)
        {
            if(i%2===0)
            {
                console.log(words[i].toUpperCase());
            }
            else
            {
                console.log(words[i].toLowerCase());
            }
        }
    }

}

//Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and
// returns the word in the opposite case. Hint: see toLowercase()
// ex. hello -> HELLO or HOWDY -> howdy
function problem2()
{
    let input = prompt("Enter a word");
    oppCase(input);
    function oppCase(string)
    {
        // let string = word.split(" ");
        if(string === string.toUpperCase())
        {
            console.log(string.toLowerCase())
        }
        else
        {
            console.log(string.toUpperCase())
        }
    }
}


