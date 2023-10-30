import Producto from "./producto.js";

function guardar(){
    let producto = document.getElementById("inp_producto").value
    let precio   = document.getElementById("inp_precio").value
    let imagen   = document.getElementById("inp_imagen").value
    let descripcion = document.getElementById("inp_descripcion").value

    let productojs = new Producto(producto, precio, imagen, descripcion)
    productojs.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click", guardar)



function listar(){
    let productojs = new Producto()
    productojs.obtener_productos()
}
listar()



function eliminar (){
    let indice = localStorage.getItem("indice")
    let producto = new Producto()
    producto.eliminar_producto(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)



function actualizar (){

    let index = localStorage.getItem("indice_update")
 
    let productojs = new Producto()
    productojs.actualizar_producto(index)
    
 }
 document.getElementById("btn_actualizar").addEventListener("click", actualizar)
 