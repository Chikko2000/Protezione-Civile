
fetch('data/alerts.json')
  .then(res => res.json())
  .then(alerts => {
    const container = document.getElementById('alerts');
    alerts.forEach(alert => {
      const div = document.createElement('div');
      div.className = `alert ${alert.tipo}`;
      div.innerText = `${alert.data}: ${alert.messaggio}`;
      container.appendChild(div);
    });
  });
