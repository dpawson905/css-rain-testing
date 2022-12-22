function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".header__overlay");

  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
  });

  const writer = document.getElementById("write");
  const writer2 = document.getElementById("write2");

  const typewriter = new Typewriter(writer, {
    loop: true,
    delay: 75,
  });
  const typewriter2 = new Typewriter(writer2, {
    loop: false,
    delay: 75,
    cursor: "",
  });

  typewriter
    .typeString("Developer")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Mentor")
    .pauseFor(1000)
    .deleteAll()
    .start();

  typewriter2.typeString(".dev").pauseFor(1000).start();

  // Get the canvas element from the HTML page
  var canvas = document.getElementById("canvas");

  // Set the canvas width and height to the size of the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Get the canvas context
  var ctx = canvas.getContext("2d");

  // Set the fill style to a light blue color
  ctx.fillStyle = "grey";

  // Set the stroke style to a darker blue color
  ctx.strokeStyle = "grey";

  // Set the line width for the raindrop stroke
  ctx.lineWidth = 3;

  // Set the raindrop size and spacing variables
  var raindropSize = 15;
  var raindropSpacing = 240;

  // Set the number of columns and rows of raindrops
  var columns = Math.ceil(canvas.width / raindropSpacing);
  var rows = Math.ceil(canvas.height / raindropSpacing);

  // Create a 2D array to store the raindrops
  var raindrops = new Array(columns);
  for (var i = 0; i < columns; i++) {
    raindrops[i] = new Array(rows);
  }

  // Initialize the raindrop positions
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      raindrops[i][j] = {
        x: i * raindropSpacing,
        y: j * raindropSpacing,
        speed: Math.random() * 5 + 5,
        length: Math.random() * raindropSize + raindropSize / 2,
      };
    }
  }

  // Animate the raindrops
  function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through the raindrops and draw them
    for (var i = 0; i < columns; i++) {
      for (var j = 0; j < rows; j++) {
        var raindrop = raindrops[i][j];

        // Draw the raindrop
        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx.stroke();

        // Update the raindrop position
        raindrop.y += raindrop.speed;

        // If the raindrop has reached the bottom of the canvas, reset its position
        if (raindrop.y > canvas.height) {
          raindrop.y = 0;
        }
      }
    }

    // Animate the raindrops again in the next frame
    requestAnimationFrame(animate);
  }

  // Start the animation
  animate();
});
