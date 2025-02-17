document.getElementById('stressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const target = document.getElementById('target').value;
    const targetPort = document.getElementById('targetPort').value || 80;
    const duration = document.getElementById('duration').value;
    const attackType = document.getElementById('attackType').value;

    const output = document.getElementById('output');
    output.innerHTML = 'Starting stress test...';

    stressTest(target, targetPort, duration, attackType, output);
});

function stressTest(target, targetPort, duration, attackType, output) {
    const startTime = Date.now();
    const endTime = startTime + (duration * 1000);

    function pingTarget() {
        const img = new Image();
        img.src = `http://${target}`;
        img.onload = function() {
            output.innerHTML += 'Ping successful.<br>';
        };
        img.onerror = function() {
            output.innerHTML += 'Ping failed.<br>';
        };
    }

    function sendHTTPRequest() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://${target}`, true);
        xhr.send();
    }

    function sendUDPRequest() {
        const socket = new WebSocket(`ws://${target}:${targetPort}`);
        socket.onopen = function() {
            socket.send('UDP Flood');
        };
        socket.onclose = function() {
            socket.close();
        };
    }

    function sendTCPRequest() {
        const socket = new WebSocket(`ws://${target}:${targetPort}`);
        socket.onopen = function() {
            socket.send('TCP Flood');
        };
        socket.onclose = function() {
            socket.close();
        };
    }

    function stressLoop() {
        if (Date.now() < endTime) {
            if (attackType === 'http') {
                sendHTTPRequest();
            } else if (attackType === 'udp') {
                sendUDPRequest();
            } else if (attackType === 'tcp') {
                sendTCPRequest();
            }
            setTimeout(stressLoop, 100); // Adjust the interval as needed
        } else {
            output.innerHTML += 'Stress test completed.';
        }
    }

    pingTarget();
    stressLoop();
}