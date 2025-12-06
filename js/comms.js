// JS per pagina allerte
fetch('js/allerte.json')
  .then(res => res.json())
  .then(data => {
    if (!data || data.length === 0) return;

    // Ordina per data inizio decrescente
    data.sort((a, b) => new Date(b.inizio) - new Date(a.inizio));

    // ===== ULTIMA ALLERTA =====
    const latest = data[0];
    const latestDiv = document.getElementById("latest-alert");
    if(latestDiv){
      const bgColor = latest.livello === "alto" ? "#e74c3c" :
                      latest.livello === "medio" ? "#f39c12" : "#f1c40f";
      const msg = latest.messaggio || " ";
      latestDiv.style.background = bgColor;
      latestDiv.style.color = latest.livello === "basso" ? "#222" : "#fff";
      latestDiv.style.padding = "20px";
      latestDiv.style.borderRadius = "12px";
      latestDiv.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
      latestDiv.innerHTML = `
        <h3>${latest.titolo}</h3>
        <p class="dates">${latest.inizio} - ${latest.fine}</p>
        <p>${msg}</p>
        <a href="${latest.file}" target="_blank" style="color:inherit;text-decoration:underline;">Leggi il comunicato</a>
      `;
    }

    // ===== ALLERTE PASSATE =====
    const pastDiv = document.getElementById("past-alerts");
    if(pastDiv){
      data.forEach((a, i) => {
        const img = a.livello === "alto" ? "img/rossa.jpg" :
                    a.livello === "medio" ? "img/arancione.jpg" : "img/gialla.jpg";
        const msg = a.messaggio || " ";
        pastDiv.innerHTML += `
          <div class="col-md-4 fade-in" style="animation-delay:${i*0.2}s">
            <div class="past-alert-card" onclick="window.open('${a.file}', '_blank')">
              <img src="${img}" alt="${a.titolo}">
              <h5>${a.titolo}</h5>
              <p>${a.inizio} - ${a.fine}</p>
              <p>${msg}</p>
            </div>
          </div>
        `;
      });
    }
  })
  .catch(err => console.error("Errore caricamento allerte:", err));
