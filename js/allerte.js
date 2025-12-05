fetch('js/allerte.json')
  .then(res => res.json())
  .then(data => {
    if(data.length === 0) return;

    // Ordina per data inizio decrescente
    data.sort((a,b)=> new Date(b.inizio) - new Date(a.inizio));

    // Ultima allerta
    const latest = data[0];
    const latestDiv = document.getElementById("latest-alert");
    const defaultMsg = latest.messaggio || " ";
    // colore sfondo in base al livello
    const bgColor = latest.livello === "alto" ? "#e74c3c" :
                    latest.livello === "medio" ? "#f39c12" : "#f1c40f";

    latestDiv.style.background = bgColor;
    latestDiv.innerHTML = `
      <h3>${latest.titolo}</h3>
      <p class="dates">${latest.inizio} - ${latest.fine}</p>
      <p>${defaultMsg}</p>
      <a href="${latest.file}" target="_blank" style="color:#fff;text-decoration:underline;">Leggi il comunicato</a>
    `;

    // Allerte passate
    const pastDiv = document.getElementById("past-alerts");
    data.forEach((a,i)=>{
      // foto in base al livello
      let img = a.livello === "alto" ? "img/rossa.jpg" :
                a.livello === "medio" ? "img/arancione.jpg" : "img/gialla.jpg";
      const msg = a.messaggio || " ";
      pastDiv.innerHTML += `
        <div class="col-md-4 fade-in" style="animation-delay:${i*0.2}s">
          <div class="past-alert-card" onclick="window.open('${a.file}','_blank')">
            <img src="${img}" alt="${a.titolo}">
            <h5>${a.titolo}</h5>
            <p>${a.inizio} - ${a.fine}</p>
            <p>${msg}</p>
          </div>
        </div>
      `;
    });
  });
