const reverseStr = str => {

    let charList = str.split('');
    let reversedList = charList.reverse();
    let reversedStr = reversedList.join('');
    return reversedStr;
}

const isPalindrome = str => {

    let reversedStr = reverseStr(str);
    return str === reversedStr;
}

const dateToStr = date => {

    let dateInStr = {
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

    return dateInStr;
}

const retrunAllDateVariations = date => {

    date = dateToStr(date);
    const ddmmyyyy = date.day + date.month + date.year;
    const mmddyyyy = date.month + date.day + date.year;
    const yyyymmdd = date.year + date.month + date.day;
    const ddmmyy = date.day + date.month + date.year.slice(2);
    const mmddyy = date.month + date.day +  date.year.slice(2);
    const yymmdd =  date.year.slice(2) + date.month + date.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]


}

const checkIsPalindromeForAllDateVariations = date => {

    let dateVariationList = retrunAllDateVariations(date);
    let flag = false;

    for(var i=0; i < dateVariationList.length; i++) {
        if(isPalindrome(dateVariationList[i])){
            flag = true;
            break;
        }
    } 
    return flag;
}

const isLeapYear = year => {

    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
}

const getNextDate = date => {

    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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

const getNextPalindromeDate = date => {

    let nextDate = getNextDate(date);
    let counter = 0;

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

export { reverseStr, isPalindrome, dateToStr, retrunAllDateVariations, checkIsPalindromeForAllDateVariations, isLeapYear, getNextDate, getNextPalindromeDate,  }