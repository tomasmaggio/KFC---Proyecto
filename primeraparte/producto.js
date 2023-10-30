export default class Producto{

    constructor(prod, prec, img, desc){
        this.producto = prod
        this.precio = prec
        this.imagen = img
        this.descripcion = desc
    }

    guardar_producto(){

        let nuevo_producto ={
            producto: this.producto,
            precio: this.precio,
            imagen: this.imagen,
            descripcion: this.descripcion
        }

        if("listado_productos" in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("listado_productos", JSON.stringify(lista_productos))

        }else{
            let lista_productos = []
            lista_productos.push(nuevo_producto)

            localStorage.setItem("listado_productos", JSON.stringify (lista_productos))
        }

        
        this.obtener_productos()
        this.vaciar_formulario()
    }


    obtener_productos(){

        if("listado_productos" in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

            let filas = []
            lista_productos.forEach( (element, index) => {
                let fila=
                `<tr>
                        <td style="text-align:center">${index+1}</td>
                        <td style="text-align:center">${element.producto}</td>
                        <td style="text-align:center"><img src="${element.imagen}"class="img-thumbnail"></td>
                        <td style="text-align:center">${element.descripcion}</td>
                        <td style="text-align:center">$${element.precio}</td>

                        <td>
                            <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                            <button onclick="editar(${index})" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button>
                        </td>
    
                    </tr>`
                    filas.push(fila)
            })
            document.getElementById("tbody").innerHTML = filas.join('')
        }
    }


    eliminar_producto(index){
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

        lista_productos.splice(index,1)
        localStorage.setItem("listado_productos",JSON.stringify(lista_productos))
        this.obtener_productos()
    }


    actualizar_producto(index){
        let listado_productos = JSON.parse(localStorage.getItem("listado_productos"))

        listado_productos[index].producto = document.getElementById("inp_producto").value
        listado_productos[index].precio = document.getElementById("inp_precio").value
        listado_productos[index].imagen = document.getElementById("inp_imagen").value
        listado_productos[index].descripcion = document.getElementById("inp_descripcion").value

        localStorage.setItem("listado_productos", JSON.stringify(listado_productos))

        this.obtener_productos()
        this.vaciar_formulario()

        document.getElementById("btn_guardar").style.display = "block"
        document.getElementById("btn_actualizar").style.display = "none"

    }



    vaciar_formulario()
        {
        document.getElementById("form_productos").reset()
    }
}