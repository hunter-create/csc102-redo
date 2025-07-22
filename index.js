// let sets our click counter to 0
let count = 0;
// This function increments the click counter and updates the display
function clickcounter() 
    {
        // count is incremented by 1 each time the button is clicked
        count++;
        if (count >= 301) {
            document.getElementById("counter").innerText = "You have reached the maximum number of clicks.";
            // Reset the counter after reaching the limit
            count = 0;
        }
        document.getElementById("counter").innerText = count;
        return;
    }

