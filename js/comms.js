fetch('js/comunicazioni.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('comms');
    data.forEach((comm, index) => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.style.animationDelay = `${index * 0.2}s`;
      div.innerHTML = `
        <h5 style="color:#004a99;">${comm.titolo}</h5>
        <small>${comm.data}</small>
        <p>${comm.messaggio}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Errore caricamento comunicazioni:', err));
