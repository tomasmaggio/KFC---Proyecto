function almacenar_indice(index)
{
localStorage.setItem("indice",index)
}

function editar(index)
{
    let listado_productos = JSON.parse(localStorage.getItem("listado_productos"))

    document.getElementById("inp_producto").value = listado_productos[index].producto
    document.getElementById("inp_precio").value = listado_productos[index].precio
    document.getElementById("inp_imagen").value = listado_productos[index].imagen
    document.getElementById("inp_descripcion").value = listado_productos[index].descripcion

    //guaradamos en el storage el indice del cliente que queremos actualizar
    localStorage.setItem("indice_update", index)

    //encendemos el boton actualizar (que aparezca)
    document.getElementById("btn_guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"
    
}