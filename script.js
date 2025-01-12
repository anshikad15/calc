//For now M+ is not functional 
let string = "";
let buttons = document.querySelectorAll('.button'); //selects all the buttons having class button 
Array.from(buttons).forEach(button =>{
 button.addEventListener('click', (e)=> {
   if (e.target.innerHTML == '='){
     try {
       string = eval(string); // Evaluate the string as a mathematical expression
     } catch (error) {
       string = "Error"; // Display error for invalid input
     }
     document.querySelector('input').value = string;
   }
   else if (e.target.innerHTML == 'C'){
     string=""
     document.querySelector('input').value = string;
   }
   else{
   console.log(e.target)
   string = string + e.target.innerHTML;
   document.querySelector('input').value= string;
   }
 })
})
