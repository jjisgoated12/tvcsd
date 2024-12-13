// Function to load the selected game in the iframe
function loadGame(gameUrl) {
    const iframeContainer = document.getElementById('iframeContainer');
    const gameIframe = document.getElementById('gameIframe');
  
    // Set the iframe source to the selected game URL
    gameIframe.src = gameUrl;
  
    // Display the iframe container
    iframeContainer.style.display = 'block';
  }
  