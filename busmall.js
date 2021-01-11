'use strict';

var ctx = document.getElementById("myChart").getContext('2d');
var totalClicks = 0;
var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');

var lastShownImages = [];
var allProducts = [];

function Product(name, imgPath) {

  this.name = name;
  this.imgPath = imgPath;
  this.views = 0;
  this.votes = 0;

 

  allProducts.push(this); 
}

  new Product('bag', 'bag.jpg');
  new Product('banana', 'banana.jpg');
  new Product('bathroom', 'bathroom.jpg');
  new Product('boots', 'boots.jpg');
  new Product('breakfast', 'breakfast.jpg');
  new Product('bubblegum', 'bubblegum.jpg');
  new Product('chair', 'chair.jpg');
  new Product('cthulhu', 'cthulhu.jpg');
  new Product('dog-duck', 'dog-duck.jpg');
  new Product('dragon', 'dragon.jpg');
  new Product('pen', 'pen.jpg');
  new Product('pet-sweep', 'pet-sweep.jpg');
  new Product('scissors', 'scissors.jpg');
  new Product('shark', 'shark.jpg');
  new Product('sweep', 'sweep.png');
  new Product('tauntaun', 'tauntaun.jpg');
  new Product('unicorn', 'unicorn.jpg');
  new Product('usb', 'usb.gif');
  new Product('water-can', 'water-can.jpg');
  new Product('wine-glass', 'wine-glass.jpg');



function randomImage() {
  var firstRandom = Math.floor(Math.random() * allProducts.length);
  var secondRandom = Math.floor(Math.random() * allProducts.length);
  var thirdRandom = Math.floor(Math.random() * allProducts.length);


  while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || lastShownImages.includes(firstRandom) || lastShownImages.includes(secondRandom) || lastShownImages.includes(thirdRandom)) {
    firstRandom = Math.floor(Math.random() * allProducts.length);
    secondRandom = Math.floor(Math.random() * allProducts.length);
    thirdRandom = Math.floor(Math.random() * allProducts.length);
  }
  lastShownImages[0] = firstRandom;
  lastShownImages[1] = secondRandom;
  lastShownImages[2] = thirdRandom;

  firstImg.src = allProducts[firstRandom].imgPath;
  secondImg.src = allProducts[secondRandom].imgPath;
  thirdImg.src = allProducts[thirdRandom].imgPath;


  firstImg.alt = allProducts[firstRandom].name;
  secondImg.alt = allProducts[secondRandom].name;
  thirdImg.alt = allProducts[thirdRandom].name;

  allProducts[firstRandom].views++;
  allProducts[secondRandom].views++;
  allProducts[thirdRandom].views++;

  totalClicks++;

  if (totalClicks === 25) {
    firstImg.removeEventListener('click', handleImageClick);
    secondImg.removeEventListener('click', handleImageClick);
    thirdImg.removeEventListener('click', handleImageClick);

    var names = [];
      var shoun=[]
      for (var i = 0; i < allProducts.length; i++) {
        names.push(allProducts[i].name);
      }
    
      var votes = [];
      for (var j = 0; j < allProducts.length; j++) {
        votes.push(allProducts[j].votes);
        shoun.push(allProducts[j].views)
      }
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: names,
          datasets: [{
              label: '# of Votes',
              data: votes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          } ,
          {
            label: 'time of shoun',
            data: shoun,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
         
        
        ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
    

    displayResults(); 

    

    localStorage.setItem('productVotes', JSON.stringify(allProducts));
  }

}
function handleImageClick(event) {
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
      console.log(allProducts)

   }
  }
  randomImage();

  


}
randomImage();








firstImg.addEventListener('click', handleImageClick);
secondImg.addEventListener('click', handleImageClick);
thirdImg.addEventListener('click', handleImageClick);

function myFunction() {
  document.getElementById("demo").innerHTML = "your result";
  for(var i =0 ;i<24;i++){
      
    var ctx = document.getElementById("main-content")
    
   var tablee=document.createElement('table')
   ctx.appendChild(tablee)
   var rowOne =document.createElement('tr')
   tablee.appendChild(rowOne)
   var rowOneT =document.createElement('th')
   rowOneT.textContent= allProducts[i].name+ ' chosing ' + allProducts[i].votes +' time and viwes a ' +allProducts[i].views +" time"
     rowOne.appendChild(rowOneT)
     }
}