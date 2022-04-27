<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:type" content="website">
  <meta property="og:title" content="pauel">
  <meta property="og:description" content="My socials and projects">
  <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="./style.css">
  <title>pauel</title>
</head>

<body>
  <div class="container">
    <div class="text">
      <?php echo file_get_contents("assets/pauel.svg"); ?>
    </div>
    <div class="links">
      <div class="link">
        <a href="https://github.com/ppauel" target="_blank">
          <?php echo file_get_contents("assets/github.svg"); ?>
        </a>
        <span class="tooltiptext">GitHub</span>
      </div>
      <div class="link">
        <a href="https://discord.gg/JCbVuaDg48" target="_blank">
          <?php echo file_get_contents("assets/discord.svg"); ?>
        </a>
        <span class="tooltiptext">Discord (German)</span>
      </div>
      <div class="link">
        <a href="https://open.spotify.com/user/nuw3dm753mezx83uorq1aoevv?si=29a5e3818c2149e5" target="_blank">
          <?php echo file_get_contents("assets/spotify.svg"); ?>
        </a>
        <span class="tooltiptext">Spotify</span>
      </div>
    </div>
  </div>
</body>

</html>