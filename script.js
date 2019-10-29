// Write your JavaScript code here!

// makes sure whole page is loaded before assigning event listeners
window.addEventListener("load", function() {
 // validations
   let button = document.getElementById("formSubmit");
     
      button.addEventListener("click", function(event) {
         let validate = true;


         let input = document.getElementById("pilotName");
         if(input.value == "") {
            document.getElementById("pilotStatus") .innerHTML = "Pilot name required"
            validate = false;
         }  else {
            document.getElementById("pilotStatus") .innerHTML = "Pilot ready"
         }

         input = document.getElementsByName("copilotName")[0];
         if(input.value == "") {
            document.getElementById("copilotStatus") .innerHTML = "Co-Pilot name required"
            validate = false;
         }  else {
            document.getElementById("copilotStatus") .innerHTML = "Co-Pilot ready"
         }

         input = document.getElementsByName("fuelLevel")[0];
         if(input.value == "") {
            document.getElementById("fuelStatus") .innerHTML = "Fuel level required"
            validate = false;
         }  else {
            let fuelLevel = parseInt(input.value, 10);
            if (fuelLevel < 10000){
               validate=false;

               document.getElementById("fuelStatus") .innerHTML = "Fuel level to low for launch"
            } else {
               document.getElementById("fuelStatus") .innerHTML = "Fuel level high enough for launch"
            }
         }

         input = document.getElementsByName("cargoMass")[0];
         if(input.value == "") {
            document.getElementById("cargoStatus") .innerHTML = "Cargo mass required"
            validate = false;
         }  else {
            let cargoMass = parseInt(input.value, 10);
            if (cargoMass > 10000){
               document.getElementById("cargoStatus") .innerHTML = "Cargo mass is too heavy"
               validate=false;
            } else {
               document.getElementById("cargoStatus") .innerHTML = "Cargo mass low enough for launch"
            }
         }


       
// modified DOM to show messages 
         if (!validate) {
            event.preventDefault();
            document.getElementById("faultyItems").style.visibility = "visible";
         }
         if (!validate) {
            event.preventDefault();
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus") .innerHTML = "Shuttle not ready for launch";
         } else {
            event.preventDefault();
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("launchStatus") .innerHTML = "Shuttle is ready for launch";
            
         }
      });


   });
   
  

/* This block of code shows how to format the HTML once you fetch some planetary JSON! 
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">

*/
//document.getElementById("launchStatus").div.innerHTML = "Mission Target";