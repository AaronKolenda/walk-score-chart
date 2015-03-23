$(document).ready(function(){
  var canvas = document.getElementById("chart-canvas");
  var ctx = canvas.getContext("2d");

  var data = {
    labels: ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix",
    "Dallas", "San Francisco", "Austin", "Boston", "Seattle", "Washington D.C.", "Denver", "Portland", "Las Vegas", "Atlanta", "Raleigh", "Miami", "Cleveland", "Minneapolis", "New Orleans", "Honolulu"],
    datasets: [
        {
            label: "Walk Score",
            fillColor: "rgba(153, 22, 19, 0.9)",
            strokeColor: "rgba(153, 22, 19, 0.9)",
            highlightFill: "rgba(153, 22, 19, 1)",
            highlightStroke: "rgba(153, 22, 19, 1)",
            data: [87.6, 63.9, 74.8, 44.2, 76.5, 38.3, 43.6, 83.9, 35.4, 79.5, 70.8, 74.1, 55.7, 62.8, 38.6, 45.9, 28.8, 75.6, 56.8, 65.4, 56.3, 62.6]
        },
        {
            label: "Transit Score",
            fillColor: "rgba(28, 57, 187, 0.9)",
            strokeColor: "rgba(28, 57, 187, 0.9)",
            highlightFill: "rgba(28, 57, 187, 1)",
            highlightStroke: "rgba(28, 57, 187, 1)",
            data: [81.2, 49.9, 65.3, 34.6, 67.0, 0, 38.9, 80.5, 32.8, 74.8, 57.3, 70.4, 46.9, 49.6, 32.2, 43.4, 22.7, 58.2, 47.2, 58.5, 0, 55.6]
        },
        {
            label: "Bike Score",
            fillColor: "rgba(244, 216, 28, 0.9)",
            strokeColor: "rgba(244, 216, 28, 0.9)",
            highlightFill: "rgba(244, 216, 28, 1)",
            highlightStroke: "rgba(244, 216, 28, 1)",
            data: [62.3, 54.0, 61.5, 48.8, 68.4, 51.9, 41.4, 70.0, 45.1, 67.8, 64.1, 65.3, 69.5, 70.3, 51.8, 42.7, 38.8, 56.5, 50.5, 78.5, 59.7, 44.8]
        }
    ]
};

  var myBarChart = new Chart(ctx).Bar(data);
  
});