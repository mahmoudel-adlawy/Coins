const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
      // labels: ['0%TAXES ', '20T Total Supply', '100% 6 MonTH LIQUITIY LOCK ', '100% Added  Supply to LIQUITY'],
      datasets: [{
        data: [30, 19, 26,1 , 2 , 2],
        backgroundColor	:['#FF4069','#059BFF','#A77EF6','#95A1AF','#FFCC56','#95A1AF' ,'#95A1AF']

        
      }]
    },
    options: {
     
        responsive: false,
    }
  });