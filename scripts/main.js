
const labels = ['Aarde', 'in-orbit', 'out-orbit', 'Ruimte', 'Rond Mars', 'Mars']
const snelheidData = {
  labels: labels,
  datasets: [
    {
      label: 'Snelheid x 10*3 kmpu',
      data: [98, 57, 83, 89, 64, 30],
      fill: false,
      borderColor: 'rgb(255, 182, 182)',
      tension: 0.3,
    },
  ],
}

const drankData = {
  labels: ['Water', 'Koffie', 'Proteine Shake', 'Frisdrank', 'Bier'],
  datasets: [
    {
      label: 'Dranken voorraad in %',
      data: [76, 54, 45, 86, 32],
      backgroundColor: [
        'rgb(255, 182, 182)',
        'rgb(162, 120, 120, 64)',
        'rgb(230, 230, 230)',
        'rgb(63, 61, 86)',
        'rgb(55, 31, 65)',
      ],
    },
  ],
}

const voedselData = {
  labels: ['Ontbijt', 'Lunch', 'Diner', 'Desserts', 'Snacks'],
  datasets: [
    {
      label: 'Voedsel voorraad in %',
      data: [65, 73, 60, 39, 76],
      backgroundColor: [
        'rgb(255, 182, 182)',
        'rgb(162, 120, 120, 64)',
        'rgb(230, 230, 230)',
        'rgb(63, 61, 86)',
        'rgb(55, 31, 65)',
      ],
    },
  ],
}

const reizigersData = {
  labels: ['Passagiers', 'Controlekamer personeel', 'Housekeeping', 'Keukenpersoneel', 'Overig personeel'],
  datasets: [
    {
      data: [103, 13, 36, 18, 23],
      backgroundColor: [
        'rgb(255, 182, 182)',
        'rgb(162, 120, 120, 64)',
        'rgb(230, 230, 230)',
        'rgb(63, 61, 86)',
        'rgb(55, 31, 65)',
      ],
    },
  ],

}



const configSnelheid = {
  type: 'line',
  data: snelheidData,
  options: {
    scales: {
      y: {
        stacked: true,
      },
    },
  },
}

const configDrank = {
  type: 'polarArea',
  data: drankData,
  options: {},
}

const configVoedsel = {
  type: 'polarArea',
  data: voedselData,
  options: {},
}

const configReizigers = {
  type: 'doughnut',
  data: reizigersData,
  options: {},
}


const snelheidChart = new Chart(
  document.getElementById('snelheid'),
  configSnelheid
)

const drankChart = new Chart(document.getElementById('dranken'), configDrank)

const voedselChart = new Chart(document.getElementById('voedsel'), configVoedsel)

const reizigersChart = new Chart(
  document.getElementById('reizigers'),
  configReizigers
)
