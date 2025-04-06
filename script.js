const text = "Hi there, I'm Ioli! 👋";
const element = document.getElementById("typed-text");
let index = 0;

function typeCharacter() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeCharacter, 100); // typing speed in ms
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeCharacter();
});

const numBubbles = 20;
const bubbleContainer = document.querySelector('.bubble-background');

for (let i = 0; i < numBubbles; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 40 + 20; 
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  const leftPosition = Math.random() * 100;
  bubble.style.left = `${leftPosition}%`;

  const delay = Math.random() * 5 + 's';
  const duration = Math.random() * 5 + 5 + 's';
  bubble.style.animationDelay = delay;
  bubble.style.animationDuration = duration;

  bubbleContainer.appendChild(bubble);
}



  