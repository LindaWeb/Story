
// console.log(module);

module.exports.getDate = getDate;

function getDate() {
   
   var today = new Date();

   var options = {
       weekday: "long",
       day: "numeric",
       month: "long",
   }
//    var optionsWeekend  = {
//        weekday: "long",
//    }

   var day = today.toLocaleDateString("en-US", options);
//    var weekend = today.toLocaleDateString("en-US", optionsWeekend);

   return day;

}

module.exports.getDay = getDay;
function getDay() {
   
    var today = new Date();
 
    var options = {
        weekday: "long",
    }
 
    var day = today.toLocaleDateString("en-US", options);

    return day;
 
 }

 console.log(module.exports);