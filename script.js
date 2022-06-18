function tabla(data) {
  let table="<tr><th>  Nombre  </th><th>  Apellidos  </th><th>  Nota 1  </th><th>  Nota 2  </th><th>  Nota 3  </th><th>  Nota 4  </th><th>  Nota media  </th></tr>";
  let obj = data.alumnos;
  for (i = 0; i <obj.length; i++) { 
      table += "<tr><td>" +

          obj[i].nombre +
          "</td><td>"+
          obj[i].apellidos +
          "</td><td>" +
          obj[i].notas[0] +
          "</td><td>" +
          obj[i].notas[1] +
          "</td><td>" +
          obj[i].notas[2] +
          "</td><td>" +
          obj[i].notas[3] +
          "</td><td>" +
          (obj[i].notas[0]+obj[i].notas[1]+obj[i].notas[2]+obj[i].notas[3])/4+
          "</td>";
  }

  document.getElementById("demo").innerHTML = table;    
  
}



function datos() {
const options = {
  method: "GET",
};

fetch("alumnos.json")
    .then(response => response.json())
    .then(data => tabla(data));
}