const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Direst', 'Email', 'Ad Networks', 'Video Ads'],
        datasets: [{
            label: 'Source',
            data: [22, 12, 8, 6],
            backgroundColor: [
                'rgba(22, 132, 11, 1)',
                'rgba(75, 0, 252, 1)',
                'rgba(126, 0, 127, 1)',
                'rgba(235, 11, 237, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});