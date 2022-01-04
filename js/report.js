GitHub_Information = require('../text.txt')

function getData() {
    var successRate = document.getElementById('successRate').getElementsByClassName('percent')[0].innerHTML;
    console.log('test')
    if (successRate == "100%") 
    {
        console.log("The success rate of all tests is: " + successRate)
    }
    var x = readFile(GitHub_Information)
    console.log(x)
}

window.onload = getData;

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      console.log(reader.result);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }