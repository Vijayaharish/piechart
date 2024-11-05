// Data for the pie chart
const data = {
    labels: ['Social Media', 'Search Engines', 'Email Marketing', 'Referrals', 'Direct'],
    datasets: [{
        label: 'Website Traffic Sources',
        data: [30, 40, 15, 10, 5],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configurations for the pie chart
const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribution of Website Traffic Sources'
            }
        }
    },
};

// Render the pie chart
const trafficChart = new Chart(
    document.getElementById('trafficChart'),
    config
);
