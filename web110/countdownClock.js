//Call countDown()Function and update every 1 second
countDown();

//Create countdown for cake event
function countDown() {
	//Store current date in time in a variable
	const targetSaleEnd = new Date("July 31, 2026 23:59:59").getTime();
	
	//set the interval to refresh every second
	const interval = setInterval(function() {

            // Get the current date and time in milliseconds
            const now = new Date().getTime();

            // Find the total time gap between now and the target date
            const timeDifference = targetSaleEnd - now;

            //Time calculations for Days, Hours, Minutes, and Seconds using the Math method
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Add values to Order menu page. The padStart adds a 0 to beginner of string when not 2 digits
            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

            // clear the interval when countdown ends.
            if (timeDifference < 0) {
                clearInterval(interval);
                document.querySelector(".timer-container").innerHTML = "<h1>The Sale Has Ended!</h1>";
            }
	},1000);
}