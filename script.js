// script.js
function updateCountdown() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const startOfNextYear = new Date(now.getFullYear() + 1, 0, 1);

    const totalTime = startOfNextYear - startOfYear; // Total milliseconds in the year
    const elapsedTime = now - startOfYear; // Milliseconds passed since the start of the year
    const remainingTime = startOfNextYear - now; // Milliseconds left until next year

    // Calculate percentage of the year completed
    const yearCompleted = (elapsedTime / totalTime) * 100;

    // Convert remaining time to days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update countdown text
    document.getElementById('countdown').innerText = 
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds left until New Year`;

    // Update progress bar and text
    document.getElementById('progress-bar').style.width = `${yearCompleted}%`;
    document.getElementById('progress-text').innerText = `${yearCompleted.toFixed(2)}% of the year completed`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
