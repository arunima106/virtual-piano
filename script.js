const sounds = {
  q: new Audio("sounds/c.mp3"),
  w: new Audio("sounds/d.mp3"),
  e: new Audio("sounds/e.mp3"),
  r: new Audio("sounds/f.mp3"),
  t: new Audio("sounds/g.mp3"),
  y: new Audio("sounds/a.mp3"),
  u: new Audio("sounds/b.mp3"),
  i: new Audio("sounds/d.mp3"),
  o: new Audio("sounds/b.mp3"),
  p: new Audio("sounds/e.mp3"),
  a: new Audio("sounds/c.mp3"),
  s: new Audio("sounds/b.mp3"),
  d: new Audio("sounds/d.mp3"),
  f: new Audio("sounds/b.mp3"),
  g: new Audio("sounds/f.mp3"),
  h: new Audio("sounds/b.mp3"),
  j: new Audio("sounds/e.mp3"),
  k: new Audio("sounds/f.mp3"),
  l: new Audio("sounds/b.mp3"),
  z: new Audio("sounds/c.mp3"),
  x: new Audio("sounds/f.mp3"),
  c: new Audio("sounds/d.mp3"),
  v: new Audio("sounds/b.mp3"),
  b: new Audio("sounds/e.mp3"),
  n: new Audio("sounds/f.mp3"),
  m: new Audio("sounds/c.mp3")
};

document.addEventListener("keydown", function(event) {
  let key = event.key.toLowerCase();

  if (sounds[key]) {
    sounds[key].currentTime = 0;
    sounds[key].play();

    let keyDiv = document.querySelector(`.key[data-key="${key}"]`);
    keyDiv.classList.add("active");

    setTimeout(() => {
      keyDiv.classList.remove("active");
    }, 200);
  }
});