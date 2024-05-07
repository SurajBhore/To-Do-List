
let input  = document.querySelector(".input");
let text  = document.querySelector(".text");

function add(){
    if(input.value == ""){
        alert("entre here");

    }else{
        let newele = document.createElement("ul");
        newele.innerHTML = `${input.value} <i class="fa-regular fa-trash-can"></i>`;
        text.appendChild(newele)
        input.value = "";

        newele.querySelector("i").addEventListener("click",remove);
        function remove(){
            newele.remove();
        }

    }
}

