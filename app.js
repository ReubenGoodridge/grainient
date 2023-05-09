const slider = document.getElementById("frequency-slider");
const filter = document.getElementById("turbulence");

slider.addEventListener("input", (event) => {
  filter.querySelector("feTurbulence").setAttribute("baseFrequency", event.target.value);
});