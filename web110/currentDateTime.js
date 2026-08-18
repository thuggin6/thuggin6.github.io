
//Call functions to get current time and update time every second.
getCurrentDateTime();
setInterval("getCurrentDateTime()",1000);
//Display a window alert
window.alert("Fill out form and then submit");

//Get the current system data and time
function getCurrentDateTime() 
{
	const now = new Date();
	document.getElementById("pageDateTime").innerHTML = now.toLocaleString();
}