document.addEventListener("DOMContentLoaded", function () {
  const sideLengthInput = document.getElementById("sideLength");
  const luasResult = document.getElementById("luasResult");
  const kelilingResult = document.getElementById("kelilingResult");
  const hitungButton = document.getElementById("hitungButton");
  const resetButton = document.getElementById("resetButton");

  hitungButton.addEventListener("click", function () {
    const sideLength = parseFloat(sideLengthInput.value);

    if (!isNaN(sideLength)) {
      const luas = sideLength * sideLength;
      const keliling = 4 * sideLength;

      luasResult.textContent = luas.toFixed(2);
      kelilingResult.textContent = keliling.toFixed(2);
    } else {
      alert("Masukkan panjang sisi yang valid.");
    }
  });

  resetButton.addEventListener("click", function () {
    sideLengthInput.value = "";
    luasResult.textContent = "";
    kelilingResult.textContent = "";
  });
});
