var clicks = 0; // Total clicks
          function clickevent(number) { // Add function
              clicks = clicks + number;
              document.getElementById("x").innerHTML = "Clicks: " + Math.round(clicks);
          }
          
          var clickers = 0; // Total clickers

          function buyclicker() { // Buy Clicker
              var clickercost =  Math.floor(10 * Math.pow(1.2,clickers)); 
              if (clicks >= clickercost) {
                  clickers = clickers + 1;
                  clicks = clicks - clickercost;
                  document.getElementById("c").innerHTML = "Clickers: " + clickers;
                  document.getElementById("x").innerHTML = "Clicks: " + clicks;
              }
              var nextcost = Math.floor(10 * Math.pow(1.2,clickers)); 
              document.getElementById("cost").innerHTML = nextcost;
          }
          
          function save() {
              // nothing
          }
          function load() {
              // nothing
          }
          window.setInterval(function(){ // Loop
              
              clickevent(clickers)
              // console.log(clicks)
              // console.log(clickers)
              
          }, 1000);