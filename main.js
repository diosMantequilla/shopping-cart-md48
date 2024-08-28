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
            miNodoBoton.setAttribute('marcador', info.id)
            miNodoBoton.addEventListener('click', anadirProductosAlCarrito)

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

    function renderizarCarrito() {
        // limpiar el carrito
        DOMcarrito.textContent = ''
        // creamos un carrito que no tenga dumplicados
        const carritoSinDuplicados = [...new Set(carrito)]
        carritoSinDuplicados.forEach( (item) => {
            
            const miItem = baseDeDatos.filter( (itemBaseDeDatos) => {
                return itemBaseDeDatos.id === parseInt(item) // convertimos item en un numero entero
            } )

            // contar los elementos o numero de unidades por producto
            const numeroUnidadesItem = carrito.reduce( (total, itemId) => {
                return itemId === item ? total += 1 : total
            }, 0 )

            // creamos el nodo del item para el carrito
            const miNodo = document.createElement('li')
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2')
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} -> ${miItem[0].precio} ${divisa}`

            // agregamos boton para eliminar item del carrito
            // -------------------------------------------------
            DOMcarrito.appendChild(miNodo)
        })

        // obtener el total y mostrarlo
        // -----------------------------

    }

    function anadirProductosAlCarrito(evento) {
        // agregamos al carrito marcador del elemento seleccionado
        carrito.push(evento.target.getAttribute('marcador'))
        // actualizar el carrito
        renderizarCarrito()
    }

    renderizarProductos()
    renderizarCarrito()

})