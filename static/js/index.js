const dashBoardChart = document.getElementById("dashboard");
const relevanceChart = document.getElementById("relevance");
const likelihoodChart = document.getElementById("liklihood");
const jsonData = document.getElementById('jsondata').innerText
const valData = JSON.parse(jsonData)
const intensity = new Array();
const relevance = new Array();
const likelihood = new Array();
valData.forEach(element => {
    intensity.push(element.intensity)
});

valData.forEach(element => {
  relevance.push(element.relevance)
});

valData.forEach(element => {
  likelihood.push(element.likelihood)
});
console.log(likelihood);
new Chart(dashBoardChart,{
    type : "bar",
      data: {
        labels: ["50", "100", "150", "200", "250", "300", "350", "400", "450", "500","550"],
        datasets: [
          {
            label: "Intensity",
            data: intensity ,
            borderWidth: 1,
            minBarLength: 100,
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

  
    
    new Chart(relevanceChart,{
        type : "line",
          data: {
            labels: ["50", "100", "150", "200", "250", "300", "350", "400", "450", "500","550"],
            datasets: [
              {
                label: "Relevance",
                data: relevance ,
                borderWidth: 1,
                minBarLength: 100,
                backgroundColor: [
                  "Red",
                  "Blue",
                  "Yellow",
                  "Green",
                  "Purple",
                  "Orange",
                ],
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

  new Chart(likelihoodChart,{
          type : "pie",
            data: {
              labels: likelihood,
              datasets: [
                {
                  label: "Likelihood",
                  data:  likelihood ,
                  borderWidth: 1,
                  minBarLength: 100,
                  backgroundColor: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          })
          
          ;
    
 