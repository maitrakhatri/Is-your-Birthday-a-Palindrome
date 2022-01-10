import { reverseStr, isPalindrome, dateToStr, retrunAllDateVariations, checkIsPalindromeForAllDateVariations, isLeapYear, getNextDate, getNextPalindromeDate,  } from './functions.js'

 
const userInput = document.querySelector("#bday");
const checkButton = document.querySelector("#check-button");
const result = document.querySelector("#result");

const clickHandler = () => {

    let inputString = userInput.value;

    if(inputString !== '') {

        var date = inputString.split("-");
        let yyyy = date[0];
        let mm = date[1];
        let dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        };

        let isPalindrome = checkIsPalindromeForAllDateVariations(date);

        if(isPalindrome) {
            result.innerText = "Yay !! Your Birthday is a Palindrome";
        }
        else {
            var [counter, nextDate] = getNextPalindromeDate(date);
            result.innerText = `Your Birthday is not a Palindrome :(
              You missed it by ${counter} days. The Next Date is ${nextDate.day}-${nextDate.month}-${nextDate.year}`;
        }
    }
    
}

checkButton.addEventListener("click", clickHandler);