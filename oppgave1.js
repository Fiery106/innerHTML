let output = document.getElementById("output");
let wares = document.getElementById("ware");

let array = []


function addWares() { 
    if (wares.value) {
        array.push(wares.value);
        output.innerHTML = ""

        for (i = 0; i < array.length; i++) {
            output.innerHTML += `- ${array[i]} <br>`;
        }

        wares.value = "";
        
    } else { 
        output.innerHTML = "Noe feil har oppstått, vennligst prøv igjen"
    } 
}