function addEntry() {
  $(".add-entry").on("click", function() {
    var activityType = $(this).parent();
    var eventTitle = activityType.find("select option:selected").text();

    // Identify hotel, restaurant, or activity
    var activityTypeName = activityType[0].id.split("-")[0];

    var entryToAppend = '<li><div class="itinerary-item"><span class="title">' + eventTitle + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div></li>';

    // Select correct list name
    var activityList = $("#"+activityTypeName+"-list");
    activityList.append(entryToAppend);
  });
}

$(document).ready(function() {
  addEntry();
});