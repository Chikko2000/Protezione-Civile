fetch('data/comms.json')
  .then(res => res.json())
  .then(data => {
    if(data.length === 0) return;

    // Ordina per data decrescente
    data.sort((a, b) => new Date(b.data) - new Date(a.data));

    const commsDiv = document.getElementById("comms");

    data.forEach(item => {
      const msg = item.messaggio || " ";
      const date = new Date(item.data).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });

      // Crea un div per ogni comunicazione
      const commElem = document.createElement('div');
      commElem.className = "comm fade-in";
      commElem.innerHTML = `
        <h5>${item.titolo}</h5>
        <p class="dates">${date}</p>
        <p>${msg}</p>
      `;

      commsDiv.appendChild(commElem);
    });
  })
  .catch(err => console.error("Errore caricando le comunicazioni:", err));
