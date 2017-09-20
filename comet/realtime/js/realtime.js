const ctx = document.getElementById('chart').getContext('2d');
const realtime = new Chart(ctx).Bar({
  labels: [],
  datasets: [{
    fillColor: 'rgba(0,60,100,1)',
    strokeColor: 'black',
    data: []
  }]
}, {
  responsive: true,
  barValueSpacing: 2
});

let isFirst = true;
const ws = new WebSocket('wss://neto-api.herokuapp.com/realtime');
ws.addEventListener('message', event => {
  if (isFirst) {
    event.data
      .split('\n')
      .map(line => line.split('|'))
      .forEach(data => realtime.addData([Number(data[1])], data[0]));

    isFirst = false;
  } else {
    const [label, data] = event.data.split('|');
    realtime.removeData();
    realtime.addData([Number(data)], label);
  }
});
