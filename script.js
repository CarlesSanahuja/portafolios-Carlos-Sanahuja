document.querySelectorAll('.profundidad').forEach(li => {
  const texto = li.textContent.trim();
  li.textContent = ''; // Vacía el li

  // Crea un span para cada letra y aplica un scale progresivo
  for (let i = 0; i < texto.length; i++) {
    const span = document.createElement('span');
    span.textContent = texto[i] === ' ' ? '\u00A0' : texto[i]; // Espacio no rompible
    // Calcula el factor de escala: empieza en 0.8 y termina en 1.35 (ajusta a gusto)
    const scale = 0.8 + (0.55 * i) / (texto.length - 1 || 1);
    span.style.transform = `scale(${scale}) skewY(-8deg)`;
    li.appendChild(span);
  }
});