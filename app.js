const slider = document.getElementById("slider")
const label = document.getElementById("forGrain")
const grain = document.getElementById("grain")
const grainContainer = document.getElementById("grainContain")

var setValue = setInterval(function(){
    let value = Number(slider.value)
    label.innerHTML = "Grain: "+value;
    grain.setAttribute("baseFrequency", value/100)
})