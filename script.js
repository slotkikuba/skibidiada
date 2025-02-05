function nextPage() {
    window.location.href = "yes.html";
}

function Start() {
    alert("Zgódź się pls pls");
}

var b = document.querySelector("#noButton");
b.addEventListener("mouseover", change);

function change() {
    const btn = document.getElementById("noButton");

    // Pobranie wymiarów dostępnej przestrzeni
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Obliczenie losowej pozycji z uwzględnieniem wymiarów przycisku
    const maxLeft = containerWidth - btnWidth;
    const maxTop = containerHeight - btnHeight;

    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    // Ustawienie pozycji przycisku
    btn.style.position = "absolute";
    btn.style.left = randomLeft + "px";
    btn.style.top = randomTop + "px";
}
