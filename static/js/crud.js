const BASEURL ='http://127.0.0.1:5000';

// const BASEURL='https://com24187.pythonanywhere.com/'


/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
  };
  try {
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
  } catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while fetching data. Please try again.');
  }
}

/**
 * Función para comunicarse con el servidor para poder Crear o Actualizar
 * un registro de pelicula
 * @returns 
 */
async function saveCliente(){
  const idcliente = document.querySelector('#id-cliente').value;
  const nombre = document.querySelector('#nombre-form').value;
  const apellido = document.querySelector('#apellido-form').value;
  const birthday = document.querySelector('#birthday-form').value;
  const country = document.querySelector('#country-form').value;
  const correo = document.querySelector('#correo-form').value;
  const password = document.querySelector('#password-form').value;

  //VALIDACION DE FORMULARIO
  if (!nombre || !apellido || !birthday || !country || !correo || !password) {
    Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
    return;
  }
  // Crea un objeto con los datos del cliente
  const clienteData = {
      nombre: nombre,
      apellido: apellido,
      birthday: birthday,
      country: country,
      correo: correo,
      password: password,
  };

    
  let result = null;
  // Si hay un idcliente, realiza una petición PUT para actualizar el cliente existente
  if(idcliente!==""){
    result = await fetchData(`${BASEURL}/api/registros/${idcliente}`, 'PUT', clienteData);
  }else{
    // Si no hay idcliente, realiza una petición POST para crear una nueva película
    result = await fetchData(`${BASEURL}/api/registros`, 'POST', clienteData);
  }
  
  const formCliente = document.querySelector('#form-cliente');
  formCliente.reset();
  Swal.fire({
    title: 'Exito!',
    text: result.message,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  })
  showClientes();
}


/**
 * Funcion que permite crear un elemento <tr> para la tabla de peliculas
 * por medio del uso de template string de JS.
 */
async function showClientes(){
  let clientes =  await fetchData(BASEURL+'/api/registros', 'GET');
  const tableClientes = document.querySelector('#list-table-clientes tbody');
  tableClientes.innerHTML='';
  clientes.forEach((cliente) => {
    let tr = `<tr>
                  <td>${cliente.nombre}</td>
                  <td>${cliente.apellido}</td>
                  <td>${cliente.birthday}</td>
                  <td>${cliente.country}</td>
                  <td>${cliente.correo}</td>
                  <td>${cliente.password}</td>
                  <td>
                      <button class="btn-ph" onclick='updateCliente(${cliente.idcliente})'><i class="fa fa-pencil" ></button></i>
                      <button class="btn-ph" onclick='deleteCliente(${cliente.idcliente})'><i class="fa fa-trash" ></button></i>
                  </td>
                </tr>`;
    tableClientes.insertAdjacentHTML("beforeend",tr);
  });
}
  
/**
 * Function que permite eliminar una pelicula del array del localstorage
 * de acuedo al indice del mismo
 * @param {number} id posición del array que se va a eliminar
 */
function deleteCliente(id){
  Swal.fire({
      title: "¿Esta seguro de eliminar el registro?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
  }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await fetchData(`${BASEURL}/api/registros/${id}`, 'DELETE');
        showClientes();
        Swal.fire(response.message, "", "success");
      }
  });
  
}


/**
 * Function que permite cargar el formulario con los datos del registro
 * para su edición
 * @param {number} id Id del registro que se quiere editar
 */
async function updateCliente(id){
  //Buscamos en el servidor el registro de acuerdo al id
  let response = await fetchData(`${BASEURL}/api/registros/${id}`, 'GET');
  const idcliente = document.querySelector('#id-cliente');
  const nombre = document.querySelector('#nombre-form');
  const apellido = document.querySelector('#apellido-form');
  const birthday = document.querySelector('#birthday-form');
  const country = document.querySelector('#country-form');
  const correo = document.querySelector('#correo-form');
  const password = document.querySelector('#password-form');
  
  idcliente.value = response.idcliente;
  nombre.value = response.nombre;
  apellido.value = response.apellido;
  birthday.value = response.birthday;
  country.value = response.country;
  correo.value = response.correo
  password.value = response.password
}
  
// Escuchar el evento 'DOMContentLoaded' que se dispara cuando el 
// contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded',function(){
  const btnSaveCliente = document.querySelector('#btn-save-cliente');
  //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
  btnSaveCliente.addEventListener('click',saveCliente);
  showClientes();
});