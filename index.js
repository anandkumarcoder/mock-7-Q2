const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

let myObject = [
     {
        task: "eating breakfast one",
        completed: true
    },

   {
        task: "eating breakfast two",
        completed: false
    },

   {
        task: "eating breakfast three",
        completed: true
    }
]

btn.addEventListener('click', taskCompleted)

function taskCompleted(){
    for(i=0; i<myObject.length; i++){
        if(myObject[i].completed){
            output.innerHTML += `<p>${myObject[i].task}</p>`


          
        }
    }

}