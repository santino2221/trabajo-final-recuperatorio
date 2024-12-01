// CON ESTA FUNCION AGREGAMOS UNA TAREA NUEVA
function agregarTarea() {
  const input = document.getElementById("tarea_Ingresada");
  const tarea = input.value.trim();//este metodo solo quieta espacios sobrantes
  if (tarea) {
    const lista = document.getElementById("lista_Tareas");
  
    // CREAR UN NUEVO ELEMENTO LI DONDE SE MUESTRA LA TAREA A REALIZAR
    const todo = document.createElement("li");
    todo.textContent = tarea;

    // EVENTO CUANDO SE MARCA TAREA REALIZADA
    todo.onclick = () => {
      todo.classList.toggle("completado");
    };

    // hacemos el boton de ELIMINAR TAREAS
    const boton_Eliminar = document.createElement("button");
    boton_Eliminar.textContent = "Eliminar";
    boton_Eliminar.classList.add("borrar-boton");
    boton_Eliminar.onclick = (e) => {
      lista.removeChild(todo); // ELIMINA LA TAREA CON EL METODO remove
    };

    todo.appendChild(boton_Eliminar); // Agregamos botón al elemento li
    lista.appendChild(todo); // Agregamos la tarea a la lista
    input.value = ""; // Limpiamos el input
  } else { //caso contrario se ejecuta la sig. linea
    alert("Por favor, ingresa una tarea válida.");
  }
}
//Función para eliminar todas las tareas completadas
function eliminar_Completadas() {
    
  const lista = document.getElementById("lista_Tareas");
  
  const items = lista.getElementsByTagName("li");
    
    // Recorremos la lista en orden inverso para evitar problemas al eliminar elementos
    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].classList.contains("completado")) {
            lista.removeChild(items[i]);  // Elimina la tarea completada
        }
    }
}
