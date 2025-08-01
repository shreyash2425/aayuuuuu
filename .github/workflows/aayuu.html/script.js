function revealContent() {
  document.querySelector('.reveal-button').style.display = 'none';
  document.querySelector('.content').classList.remove('hidden');

  // Typewriter effect
  typeWriter("💖 Happy Girlfriend Dayy aayushiiii 💖", "typewriter-text", 100);

  // Fade in other texts after typewriter finishes
  setTimeout(() => {
    document.querySelector('.thankyou').style.opacity = 1;
    document.querySelector('.surprise-message').style.opacity = 1;
  }, 2500);

  startTulipRain();
}

function typeWriter(text, elementId, delay = 100) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

function startTulipRain() {
  const tulips = ['🌷','🌸','💮','🥀','🌺'];
  setInterval(() => {
    const tulip = document.createElement('div');
    tulip.className = 'tulip';
    tulip.innerText = tulips[Math.floor(Math.random() * tulips.length)];
    tulip.style.left = Math.random() * 100 + 'vw';
    tulip.style.fontSize = Math.random() * 20 + 20 + 'px';
    document.body.appendChild(tulip);

    setTimeout(() => {
      tulip.remove();
    }, 6000);
  }, 300);
}
