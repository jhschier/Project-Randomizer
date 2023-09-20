const buttonclick = document.querySelector(".random-button")
const getResult = document.querySelector(".result-text")



function generateNumber() {
    
   
    const min = Math.ceil(document.querySelector(".input1").value)
    const max = Math.floor (document.querySelector(".input2").value)


      const result = Math.floor(Math.random() * (max - min + 1)) + min;

      if (min >= max){
        getResult.innerHTML = "Wrong Input"
        window.alert("Minimum number must be lower than the maximum number.")
      } else{

      if (buttonclick) {
        getResult.innerHTML = result
      }
    }
    
      
    }


   
    buttonclick.addEventListener("click", generateNumber)
    getResult.addEventListener("change", generateNumber)

