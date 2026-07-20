// Demo 2D canvas sketch for {% include canvas-sketch.html %}.
// Copy this file as a starting point; each sketch owns one canvas
// (default id "canvas-sketch").
(() => {
  const canvas = document.getElementById('canvas-sketch');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const frame = canvas.parentElement;
    canvas.width = frame.clientWidth * devicePixelRatio;
    canvas.height = frame.clientHeight * devicePixelRatio;
  }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function draw() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cols = 24;
    const rows = Math.ceil(cols * canvas.height / canvas.width);
    const cell = canvas.width / cols;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const r = (Math.sin(t + x * 0.4 + y * 0.3) * 0.5 + 0.5) * cell * 0.4;
        ctx.beginPath();
        ctx.arc(x * cell + cell / 2, y * cell + cell / 2, Math.max(r, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = (x + y) % 7 === 0 ? '#e95420' : '#000000';
        ctx.fill();
      }
    }
    t += 0.02;
    requestAnimationFrame(draw);
  }
  draw();
})();
