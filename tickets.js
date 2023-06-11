const inputCantidad = document.querySelector("#inputCantidad").value;
const divTotalTickets = document.querySelector("#divTotalTickets");
const selectCategorias = document.querySelector("#inputOpciones");
const btnSubmit = document.querySelector("#btnSubmit");
const valorTicket = 2000;
const descEstudiante = 0.2;
const descTrainee = 0.5;
const descJr = 0.85;


const calculoValores = ()=>{

    const categoriaSeleccionada = selectCategorias.value;
    if(categoriaSeleccionada === "estudiante"){
        let cuenta = valorTicket*descEstudiante;
        divTotalTickets.innerHTML = `<h2>Total de tickets: $${cuenta}</h2>`;
        console.log("Probando");
    }
}

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
})
btnSubmit.addEventListener('click',calculoValores);