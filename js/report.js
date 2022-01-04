function getData() {
    var successRate = document.getElementById('successRate').getElementsByClassName('percent')[0].innerHTML;
    console.log('test')
    if (successRate == "100%") 
    {
        console.log("The success rate of all tests is: " + successRate)
    }

}

window.onload = getData;
