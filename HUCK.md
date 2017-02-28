# Temporary hucks

### Angular material
When you open the calendar dialogue in md-datepicker, you can see this problem. It scrolls to the wrong month.
To avoid this problem we rewrote **CalendarMonthCtrl.prototype.getSelectedMonthIndex** function in **mdCalendarMonth** controller.
Now it looks so:
```javascript
CalendarMonthCtrl.prototype.getSelectedMonthIndex = function () {
    var calendarCtrl = this.calendarCtrl,
        date = calendarCtrl.displayDate || calendarCtrl.selectedDate || calendarCtrl.today;
    // Huck is here. We substract one month
    date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());

    return this.dateUtil.getMonthDistance(
        calendarCtrl.firstRenderableDate,
        date
    );
};
```
File **bower_components/angular-material/angular-material.js** has been changed for this.