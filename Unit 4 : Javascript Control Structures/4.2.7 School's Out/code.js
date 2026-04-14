function start(){
    // 1. Ask if it is a weekday
    var isWeekday = readBoolean("Is today a weekday? ");
    
    // 2. Ask if it is a holiday
    var isHoliday = readBoolean("Is today a holiday? ");
    
    // 3. Determine if school is out
    // School is out if it's a holiday OR if it's NOT a weekday
    var noSchoolToday = isHoliday || !isWeekday;
    
    // 4. Print the result
    println("There is no school today: " + noSchoolToday);
}
