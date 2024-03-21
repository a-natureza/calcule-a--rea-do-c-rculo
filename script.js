function calcularAreaCirculo() {
    const raio = document.getElementById("raio").value;
    const area = Math.PI * raio ** 2;
    document.getElementById("resultado").innerText = `A área do círculo é: ${area.toFixed(2)}`;
  }
  