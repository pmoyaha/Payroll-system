function    getLastDays()
{
    var d = new Date();
    var year = d.getFullYear(); //returns the year of a date as a four digit number
    var month = d.getMonth();   //returns the month of a date as a number (0-11)
 
    for (let x = 1; x <= 12; x++)
    {
        var dateDay = new Date(year, month + x, 0);
        console.log(dateDay.toDateString());//printing all pay dates
        document.write("getLastDays");
    }
    //method returns the day of a date as a number (1-31)
    return 'All 12 Pay Dates!!!';
}

function    getLastFridays()
{
    var i, x, y, last_day;
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();

    y = 1;
    while(y < 14)
    {
        x = 0;
        i = 0;
        while (x < 6) 
        {
            last_day = new Date(year, month + y, i);
            if (last_day.getDay() === 5) 
            {
                console.log(last_day.toDateString());
            }
            x++;
            i--;
        }
        y++;
    }
    return 'All 12 Last Friday\'s of the month';
}

function    getSpecificDay(a)
{
    if (a === undefined) 
    {
        a = 25;
    } 
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var payDate = new Date(year, month, a);

    for (let x = 1; x <= 12; x++) 
    {
        console.log(payDate.toDateString());
        var payDate = new Date(year, month + x, a);
    }
    return 'Pay Date chosen!';
}

function	getWeeklyFridays()
{
	var i, x, y, last_day;
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();

    y = 0;
    while(y < 12)
    {
        x = 1;
        i = 1;
        while (x <= 31) 
        {
            last_day = new Date(year, month + y, i);
            if (last_day.getDay() === 5) 
            {
                console.log(last_day.toDateString());
            }
            x++;
            i++;
        }
        y++;
    }
    return 'All 12 Last Friday\'s of the month';
}

console.log(getLastFridays());
console.log(getLastDays());
console.log(getSpecificDay());
console.log(getWeeklyFridays());
