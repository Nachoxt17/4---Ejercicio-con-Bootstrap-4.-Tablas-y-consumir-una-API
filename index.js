
     const USERSLISTAPI = "https://jsonplaceholder.typicode.com/users"; 
     /*Con Este Link Consumimos esta API cuyos Datos vamos a Representar en Formato Lista por Nombre - email - Direccion - Ciuidad  y codigo postal.*/
     console.log(USERSLISTAPI);
     /*Esto es para poder verificar en la Consola del Navegador que la Información del Link llega Correctamente.*/

     fetch(USERSLISTAPI)
        .then(response => {
            return response.json()
        })
        .then(data => {

            let userDataList = document.querySelector('#userList');
            /*Con esta Let tomamos la ID del <div> con id='userList' en medio del <body> de HTML para "Ubicar" allí el Código Javascript que tengamos que ejecutar.*/

            //let users = JSON.parse(data);

            data.map(user =>{
                //for (let user of users) {
                    userDataList.innerHTML +=
                    /*Con el método .map(function) Iteramos por cada elemento del Objeto Proveído por la API y aplicarle con "userDataList.innerHTML" el HTML y JS que está abajo
                    entre las Comillas Hacia la Izquierda (``) y MUY IMPORTANTE usamos "+=" en vez de solo "=" porque está dentro de un método Loop .map(function) que Itera
                     por cada Objeto, así en vez Iterar por todos los Usuarios y asignarle "userDataList.innerHTML" con "+" SÓLO al último Usuario por el que Itera, con "+=" Itera
                     por cada elemento asignándole "userDataList.innerHTML" PERO LOS CONSERVA Y LES AGREGA EL PRÓXIMO USUARIO EN LA LISTA.*/
                `  
                    <tr>
                      <th scope="row">${user.name}</th>
                      <td>${user.email}</td>
                      <td>${user.address.street} ${user.address.suite}</td>
                      <td>${user.address.city}</td>
                      <td>${user.address.zipcode}</td>
                    </tr> 
                    `;
                //}
                  /*Con este comando (el ".innerHTML") y usando las Comillas hacia la Izquierda (``) le asignamos a una variable Código HTML, CSS y Boostrap para después mostrarlo junto con el
                Código Javascript con el que Interactúa en el <div> (O elemento que sea) con id='userList' en medio del <body> de HTML.*/
            })
                
            // Work with JSON data here
            console.log(data);
        })
        .catch(err => {
            // Do something for an error here
        })
        