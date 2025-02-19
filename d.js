// Simulated botnet data
let bots = [];
let botCount = 0;
let botStatus = "Offline";

// Function to simulate botnet status
function updateBotnetStatus() {
    document.getElementById('bot-count').innerText = botCount;
    document.getElementById('bot-status').innerText = botStatus;
}

// Function to simulate adding bots to the botnet
function addBots(count) {
    for (let i = 0; i < count; i++) {
        bots.push(`Bot ${bots.length + 1}`);
    }
    botCount = bots.length;
    updateBotnetStatus();
}

// Function to simulate starting an attack
function startAttack() {
    const targetUrl = document.getElementById('target-url').value;
    const attackType = document.getElementById('attack-type').value;
    const attackDuration = document.getElementById('attack-duration').value;

    if (!targetUrl) {
        alert('Please enter a target URL.');
        return;
    }

    if (!attackDuration) {
        alert('Please enter the attack duration.');
        return;
    }

    // Simulate attack
    console.log(`Starting ${attackType} attack on ${targetUrl} for ${attackDuration} seconds with ${botCount} bots.`);
    alert(`Starting ${attackType} attack on ${targetUrl} for ${attackDuration} seconds with ${botCount} bots.`);

    // Simulate attack execution
    simulateAttack(targetUrl, attackType, attackDuration);
}

// Function to simulate attack execution
function simulateAttack(targetUrl, attackType, duration) {
    let startTime = new Date().getTime();
    let endTime = startTime + (duration * 1000);

    function attackLoop() {
        if (new Date().getTime() > endTime) {
            console.log(`Attack on ${targetUrl} completed.`);
            alert(`Attack on ${targetUrl} completed.`);
            return;
        }

        // Simulate sending attack packets
        console.log(`Sending ${attackType} packets to ${targetUrl}...`);
        setTimeout(attackLoop, 1000); // Simulate sending packets every second
    }

    attackLoop();
}

// Simulate botnet initialization
function initializeBotnet() {
    // Simulate adding bots to the botnet
    addBots(50); // Add 50 bots initially
    botStatus = "Online";
    updateBotnetStatus();
}

// Initialize the botnet when the page loads
window.onload = initializeBotnet;
