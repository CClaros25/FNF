const startBtn = document.getElementById('start-game');
const menu = document.getElementById('main-menu');
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

startBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  canvas.style.display = 'block';
  startGame();
});

function startGame() {
  const notes = [
    { x: 300, y: -100, speed: 3 },
    { x: 400, y: -300, speed: 3 }
  ];

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    notes.forEach(note => {
      note.y += note.speed;
      ctx.fillStyle = '#0ff';
      ctx.fillRect(note.x, note.y, 50, 20);
    });

    requestAnimationFrame(gameLoop);
  }

  gameLoop();
}

