function GetDates(startDate, daysToAdd) {
    var aryDates = [];
    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate());
        var date_value= "date_"+i;
        var day_value= "day_"+i;
        $("#"+date_value).html(currentDate.getDate());
        $("#"+day_value).html(DayAsString(currentDate.getDay()));
    }
    return aryDates;
  }
  function DayAsString(dayIndex) {
    var weekdays = new Array(6);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    return weekdays[dayIndex];
  }
  var startDate = new Date();
  console.log(startDate.getHours());
  var aryDates = GetDates(startDate, 7);
  // select div
  function select(e) {
    // Unset selected class from other options
    const selected = document.querySelectorAll('.option-list .option-selected');
    selected.forEach(function(el) {
      el.classList.remove('option-selected');
    });
    e.target.classList.add('option-selected');
  }