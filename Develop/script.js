// Setting up DOM
var currentDay = $('.currentDay');
var saveBtn = $('.saveBtn');
var timeBlock = $('.time-block');
var description = $('.description')

//Runs everything when you click the save
saveBtn.click(function() {
  var timeClock = $(this).parent().attr('id');
  var userInput = $(this).siblings('.description').val();
  localStorage.setItem(timeClock, userInput)
  })

//pulls current date
 function today() {
  var currentDayJs = dayjs().format('MMM DD, YYYY, h:mm:ss a');
  $(currentDayJs).html(currentDay);
  console.log(currentDay);
}

description.each(function(){
  var timeId = $(this).parent().attr('id');
  var savedData = localStorage.getItem(timeId)

  if (savedData) {
    $(this).val(savedData);
  }
 
  
})