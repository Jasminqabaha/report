document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('sterilizationChart').getContext('2d');
    const sterilizationChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Number of People Committed to Sterilization',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Number of People'
                    }
                }
            }
        }
    });

    const searchStaffID = document.getElementById('searchStaffID');
    const searchOperationID = document.getElementById('searchOperationID');
    const reportTable = document.getElementById('reportTable').getElementsByTagName('tbody')[0];

    searchStaffID.addEventListener('keyup', function () {
        const filter = searchStaffID.value.toLowerCase();
        filterTable(filter, 0);
    });

    searchOperationID.addEventListener('keyup', function () {
        const filter = searchOperationID.value.toLowerCase();
        filterTable(filter, 2);
    });

    function filterTable(filter, column) {
        const rows = reportTable.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            if (cells[column]) {
                const txtValue = cells[column].textContent || cells[column].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
    }
});
