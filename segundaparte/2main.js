import Producto from "../primeraparte/producto.js"
import Pedidos from "./pedidos.js"


function construir_catalogo()
{
    let pedido = new Pedidos()
    pedido.obtener_productos()
}
construir_catalogo()



function agregar(){
    let pedido = new Pedidos()
    const index = localStorage.getItem("indice_pedido")

    pedido.agregar_pedido(index)
}



for (const btn of document.getElementsByClassName('btn_agregar')) {
    btn.addEventListener('click', agregar)
}


function mostrar_tabla (){
    let indice = localStorage.getItem("indice_pedido")
    let pedido = new Pedidos()
    pedido.tabla_pedidos()
}
mostrar_tabla()


function finalizar(){
    let pedido = new Pedidos()
    pedido.finalizar_pedido()
}
document.getElementById("btn_finalizar").addEventListener("click",finalizar)


function vaciar()
{
    let pedido = new Pedidos()
    pedido.vaciar_pedido()
}
document.getElementById("btn_vaciar_pedido").addEventListener("click",vaciar)

function cliente_final(){
    let cliente = document.getElementById("inp_cliente").value
    let pedido = new Pedidos(cliente)
    pedido.finalizar_pedido()
}
document.getElementById("btn_finalizar").addEventListener("click",finalizar)

