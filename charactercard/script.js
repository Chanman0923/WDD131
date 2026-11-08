const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 1,
  health: 100,
  image: "images/swamp-beast.png",

  attacked() {
    if (this.health <= 0) {
      return;
    }
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died.`);
    }
    render();
  },

  levelUp() {
    this.level += 1;
    render();
  }
};

function render() {
  document.querySelector("#name").textContent = character.name;
  document.querySelector("#class").textContent = character.class;
  document.querySelector("#level").textContent = character.level;
  document.querySelector("#health").textContent = character.health;
  document.querySelector("#image").src = character.image;
}

document.querySelector("#attacked").addEventListener("click", () => character.attacked());
document.querySelector("#levelUp").addEventListener("click", () => character.levelUp());

render();