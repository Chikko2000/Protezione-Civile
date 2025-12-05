
const mezzi = [
  {nome: "Automezzo 1", immagine: "assets/images/mezzo1.jpg", descrizione: "Descrizione breve del mezzo 1"},
  {nome: "Automezzo 2", immagine: "assets/images/mezzo2.jpg", descrizione: "Descrizione breve del mezzo 2"}
];
const container = document.getElementById('mezzi-cards');
mezzi.forEach(m => {
  const div = document.createElement('div');
  div.className = 'col-md-4 mb-4';
  div.innerHTML = `<div class="card">
    <img src="${m.immagine}" class="card-img-top" alt="${m.nome}">
    <div class="card-body">
      <h5 class="card-title">${m.nome}</h5>
      <p class="card-text">${m.descrizione}</p>
    </div>
  </div>`;
  container.appendChild(div);
});
