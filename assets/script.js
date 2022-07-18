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
        let d = `<div class="list-group-item list-group-item-action row">
                    <div class='col-md-3'>${moment(startTime++ , 'hh').format('ha')}</div>
                    <div class='col-md-6 active' >Blank</div>
                    <div class='col-md-3'><button class='fas fa-save'></button></div>
                 </div>`; 
        finalResult += d; 
    }


    return "<div class='list-group'>" + finalResult + "</div>"; 
}