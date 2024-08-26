document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'coca de vidrio',
            precio: 30,
            imagen: 'coca.jpg'
        }, {
            id: 2,
            nombre: 'cerveza victoria',
            precio: 20,
            imagen: 'victoria.jpg'
        }, {
            id: 3,
            nombre: 'agua',
            precio: 8,
            imagen: 'agua.jpg'
        }, {
            id: 4,
            nombre: 'pinguinos',
            precio: 40,
            imagen: 'pinguinos.jpg'
        },{
            id: 5,
            nombre: 'rancheritos',
            precio: 20,
            imagen: 'rencheritos.jpg'
        }
    ]

    let carrito = []
    const divisa = '$'
    const DOMitems = document.querySelector('#items')
    const DOMcarrito = document.querySelector('#carrito')
    const DOMtotal = document.querySelector('#total')

    // funcionalidades
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {

            // contenedor de la tarjeta
            const miNodo = document.createElement('div')
            miNodo.classList.add('card', 'col-sm-4')
            // cuerpo de la tarjeta
            const miNodoCardBody = document.createElement('div')
            miNodoCardBody.classList.add('card-body')
            // titulo
            const miNodoTitle = document.createElement('h5')
            miNodoTitle.classList.add('card-title')
            miNodoTitle.textContent = info.nombre
            // imagen
            const miNodoImagen = document.createElement('img')
            miNodoImagen.classList.add('card-img-top')
            miNodoImagen.setAttribute('src', info.imagen)
            // precio
            const miNodoPrecio = document.createElement('p')
            miNodoPrecio.classList.add('card-text')
            // boton
            const miNodoBoton = document.createElement('button')
            miNodoBoton.classList.add('btn', 'btn-primary')
            miNodoBoton.textContent = '+'

            // vamos a juntar todos los elementos creados
            miNodo.appendChild(miNodoImagen)
            miNodoCardBody.appendChild(miNodoTitle)
            miNodoCardBody.appendChild(miNodoPrecio)
            miNodoCardBody.appendChild(miNodoBoton)
            miNodo.appendChild(miNodoCardBody)
            // agregar tarjetas a nuestro main
            DOMitems.appendChild(miNodo)

        })

    }

    renderizarProductos()

})