const inputCantidad = document.querySelector("#inputCantidad");
const divTotalTickets = document.querySelector("#divTotalTickets");
const selectCategorias = document.querySelector("#inputOpciones");
const btnSubmit = document.querySelector("#btnSubmit");
const cantidadTickets = document.querySelector("#inputCantidad");
const valorTicket = 2000;
const descEstudiante = 0.2;
const descTrainee = 0.5;
const descJr = 0.85;


const calculoValores = ()=>{

    const categoriaSeleccionada = selectCategorias.value;
    let cantidadSeleccionada = inputCantidad.value;
    if(cantidadSeleccionada > 0){
        if(categoriaSeleccionada === "estudiante"){
            let cuenta = (valorTicket*descEstudiante)*cantidadSeleccionada;
            divTotalTickets.innerHTML = `<h2>Total de tickets: $${cuenta}</h2>`;
            console.log("Probando");
        }
        if(categoriaSeleccionada==="trainee"){
            let cuenta = (valorTicket*descTrainee)*cantidadSeleccionada;
            divTotalTickets.innerHTML = `<h2>Total de tickets: $${cuenta}</h2>`;
        }
        if(categoriaSeleccionada==="junior"){
            let cuenta = (valorTicket*descJr)*cantidadSeleccionada;
            divTotalTickets.innerHTML = `<h2>Total de tickets: $${cuenta}</h2>`;
        }
    }
    else{
        alert("Ingrese una cantidad válida")
    }
    }


btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
})
btnSubmit.addEventListener('click',calculoValores);