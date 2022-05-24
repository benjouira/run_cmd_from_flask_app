// Set new default font family and font color to mimic Bootstrap's default styling
$(function () {
    Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';
    
    // Pie Chart Example
    var ctx = document.getElementById("myPieChart");
    var json_url = "example_data.json";
    
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Non planifié", "Achevé", "Non achevé"],
        datasets: [{
          data: [55, 30, 15],
          backgroundColor: ['red', '#1cc88a', '#36b9cc'],
          hoverBackgroundColor: ['#F0502D', '#17a673', '#2c9faf'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: true,
          caretPadding: 10,
          animateScale:true
        },
        datalabels: {
          color: '#ffffff',
          formatter: (value) => {
            return value + '%'
          }
        },
        legend: {
          display: true
        }
        //cutoutPercentage: 80,
      },
    });
    ajax_chart(myPieChart, "json_url");
    // function to update our chart
    function ajax_chart(chart, url, data) {
      var data = data || {};
    
      $.ajax({
        url:'/api/valide_chart',
        type:'get',
        dataType:'json',  
        contentType:'application/json; charset=utf-8',
        success:function(response){
    
          chart.data.labels = response.labels;
          chart.data.datasets[0].data = response.datasets[0].data; // or you can iterate for multiple datasets
          chart.update();
        }
      });
    }
    });