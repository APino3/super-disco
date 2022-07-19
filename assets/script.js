const L = console.log; 

L(); 
// Jul 17th 22
$("#currentDay").html(moment().format("MMM Do YYYY")); 

$("#container").html(getTimeBlocks()); 



function getTimeBlocks() {
    let startTime = 9; 
    let hoursInWorkDay = 8;
    let finalResult= ""; 

    for (let i = 0; i <= hoursInWorkDay; i++) {
        let d = `<div  class="list-group-item ${calculateTime(startTime)}" ${saveAction(startTime)} ">
                    <div class="column1 all-column" >${moment(startTime , 'hh').format('ha')}</div>
                    <div class="column2" ><input id='time-${startTime}' ></div>
                    <div class="column3 all-column"><i class='fas fa-save' onclick='saveTime(${startTime})'></i></div>
                 </div>`; 
                 startTime++; 
        finalResult += d; 
    }


    return "<div class='list-group' >" + finalResult + "</div>"; 
}


function calculateTime(hour) {

    if(moment().format('H') == hour) {
        // current time
        return 'present'; 
    }
    if (!moment(hour, 'hh').isAfter(moment())) {
        // before current hours
        return 'past';  
    }else {
        // after current hours
        return 'future';
    }

}


function disableTimes() {
    let startTime = 9; 
    let hoursInWorkDay = 8;

        // also get values from the local storage
        let arrayOfTimes = JSON.parse(localStorage.getItem("schedule"));  
    
        if (arrayOfTimes == undefined ){
            localStorage.setItem("schedule", JSON.stringify({})); 
            arrayOfTimes = {}; 
        }

    for (let i = 0; i <= hoursInWorkDay; i++) {
    $("#time-"+startTime).prop("disabled", true); 
    if (moment(startTime, 'hh').isAfter(moment())) {
        // after current hours
        // 'future';  
        $("#time-"+startTime).prop("disabled", false); 
    }



    // set values for the ui

    if (arrayOfTimes[startTime ] == undefined || arrayOfTimes[startTime ] == null){
        arrayOfTimes[startTime ] = ""; 
        localStorage.setItem("schedule", JSON.stringify(arrayOfTimes)); 

    }else {
        // retrieving previous stored values 
       
        $("#time-"+(startTime )).val(arrayOfTimes[startTime ]); 
    }


    startTime++; 
}
}
function saveAction(hour){
    
    let arrayOfTimes = JSON.parse(localStorage.getItem("schedule"));  
    
    if (arrayOfTimes == undefined ){
        localStorage.setItem("schedule", JSON.stringify({})); 
        arrayOfTimes = {}; 
    }
    if (arrayOfTimes[hour] == undefined || arrayOfTimes[hour] == null){
        arrayOfTimes[hour] = ""; 
        localStorage.setItem("schedule", JSON.stringify(arrayOfTimes)); 

    }else {
        // retrieving previous stored values 
       
        $("#time-"+hour).val(arrayOfTimes[hour]); 
    }
   

}

function editTime() {

    if( $(this).prop('disabled') == false) {
        alert("you can edit this"); 

    }
    
}
function saveTime(hour){
    if($("#time-"+hour).prop("disabled") == false){
        let arrayOfTimes = JSON.parse(localStorage.getItem("schedule"));  
        arrayOfTimes[hour] = $("#time-"+hour).val(); 
        localStorage.setItem("schedule", JSON.stringify(arrayOfTimes)); 
    }
}