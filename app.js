function reverseStr(str) {

    var charList = str.split('');
    var reversedList = charList.reverse();
    var reversedStr = reversedList.join('');
    return reversedStr;
}

function isPalindrome(str) {

    var reversedStr = reverseStr(str);
    return str === reversedStr;
}

function dateToStr(date) {

    var dateInStr = {
        day: "", 
        month: "", 
        year: ""
    }

    if (date.day < 10) {
        dateInStr.day = "0" + date.day;
    }
    else{
        dateInStr.day = date.day.toString();
    }

    if (date.month <10) {
        dateInStr.month = "0" + date.month;
    } 
    else {
        dateInStr.month = date.month.toString();
    }

    dateInStr.year = date.year.toString();

    // console.log(dateInStr)
    return dateInStr
}

// console.log(bdateStr)


function retrunAllDateVariations(date) {
    
    date = dateToStr(date);
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(2);
    var mmddyy = date.month + date.day +  date.year.slice(2);
    var yymmdd =  date.year.slice(2) + date.month + date.day;

    // console.log(ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd)
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkIsPalindromeForAllDateVariations(date) {
    var dateVariationList = retrunAllDateVariations(date);
    ///console.log(dateVariationList)
    var flag = false;

    for(var i=0; i < dateVariationList.length; i++) {
        if(isPalindrome(dateVariationList[i])){
            flag = true;
            break;
        }
    } 
    //console.log(flag)
    return flag;
}


function isLeapYear(year) {

    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
  }

function getNextDate(date) {

    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
          if (day > 29) {
            day = 1;
            month = 3;
          }
        }
        else {
          if (day > 28) {
            day = 1;
            month = 3;
          }
        }
      }
      else {
        if (day > daysInMonth[month - 1]) {
          day = 1;
          month++;
        }
      }
    
      if (month > 12) {
        month = 1;
        year++;
      }
    
      return {
        day: day,
        month: month,
        year: year
      };
    }

function getNextPalindromeDate(date) {

    var nextDate = getNextDate(date);
    var counter = 0;

    while(1) {
        counter++;
        var isPalindrome = checkIsPalindromeForAllDateVariations(nextDate);

        if(isPalindrome) {
            break
        }

        nextDate = getNextDate(nextDate);
        }
    return [counter, nextDate];
}

 
var userInput = document.querySelector("#bday");
var checkButton = document.querySelector("#check-button");
var result = document.querySelector("#result");

function clickHandler() {

    var inputString = userInput.value;

    if(inputString !== '') {

        var date = inputString.split("-");

        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        };

        var isPalindrome = checkIsPalindromeForAllDateVariations(date);

        if(isPalindrome) {
            result.innerText = "Yay !! Your Birthday is a Palindrome";
        }
        else {
            var [counter, nextDate] = getNextPalindromeDate(date);
            result.innerText = "You missed it by " + counter + " days" + " Next Date is " + nextDate.day +"-" + nextDate.month + "-" + nextDate.year;
        }
    }
    
}

checkButton.addEventListener("click", clickHandler);