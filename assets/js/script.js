var saveButton = document.querySelectorAll("#buttonSave");
var displayEventText = document.querySelector("#event-saved");


//  for grey class="table-secondary"
// for red class="table-danger"
// for green class="table-success"


// for the moment current date & time data and formatting 
var reformatDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(reformatDate);


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    // DISPLAY appointment added to local storage
    displayEventText.classList.remove("hidden")

    // add text to local storage
    var event = document.querySelectorAll("#textField").value;
    localStorage.setItem("event", event);


    });