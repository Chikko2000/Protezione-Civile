// JS per la sezione Comunicazioni
fetch('js/comms.json')
  .then(res => res.json())
  .then(data => {
    if(!data || data.length === 0) return;

    // Ordina per data decrescente (assumendo campo "data" formato YYYY-MM-DD HH:MM)
    data.sort((a, b) => new Date(b.data) - new Date(a.data));

    const commsDiv = document.getElementById("comms");
    if(!commsDiv) return;

    data.forEach(comm => {
      const msg = comm.messaggio || " ";
      const titolo = comm.titolo || "";
      const fileLink = comm.file ? `<a href="${comm.file}" target="_blank" style="color:#004a99;text-decoration:underline;">Leggi il documento</a>` : "";

      const div = document.createElement("div");
      div.className = "comm fade-in";
      div.innerHTML = `
        <h5>${titolo}</h5>
        <p class="dates">${comm.data}</p>
        <p>${msg}</p>
        ${fileLink}
      `;
      commsDiv.appendChild(div);
    });
  })
  .catch(err => console.error("Errore caricamento comunicazioni:", err));
