let edad = prompt(`Bienvenido a la tienda de Finca El Boleado!! 
Para ingresar usted debe ser mayor de edad. 
Ingrese su edad por favor:`);

while (isNaN(edad)) {
  edad = prompt(`El valor ingresado es incorrecto.
  Ingrese otro valor por favor:`);
}

if (edad >= 18) {
  let Bienvenido = document.createElement(`div`);
  let aleatorio = Math.round(Math.random()*30);
  if(aleatorio <=10) {
  Bienvenido.innerHTML = `<h1>Aprovecha nuestros descuentos!!<h1/>`;
  let encabezado = document.querySelector(`.row`);
  encabezado.appendChild(Bienvenido);
 }else if (aleatorio > 10 && aleatorio <= 20) {
  Bienvenido.innerHTML = `<h1>Hoy es tu dia de suerte!</h1>`;
  encabezado = document.querySelector(`.row`);
  encabezado.appendChild(Bienvenido);
 } else if (aleatorio > 20 && aleatorio <=30) {
  Bienvenido.innerHTML = `<h1>Nuestro Vermouth esta hecho con productos organicos!</h1>`;
  encabezado = document.querySelector(`.row`);
  encabezado.appendChild(Bienvenido);
 }

  let productoSeleccionado = prompt(`Para ver un producto primero seleccionelo y luego explore el producto en la pagina:
            -Syrah
            -Vermouth
            -Bonarda
            -Viognier
            -Mi carrito
            -Buscar 
            -Busqueda por VALOR
            -Salir`);

  let productoSeleccionadoMin = productoSeleccionado.toLowerCase();

  const carritoCantidadSyrah = [0];
  const carritoValorSyrah = [0];
  const carritoCantidadVermouth = [0];
  const carritoValorVermouth = [0];
  const carritoCantidadBonarda = [0];
  const carritoValorBonarda = [0];
  const carritoCantidadViognier = [0];
  const carritoValorViognier = [0];
  const carrito = [0];

  function cantidadCarrito(arr) {
    return arr.reduce((a, b) => a + b);
  }
  function valorCarrito(arrv) {
    return arrv.reduce((a, b) => a + b);
  }
  function creadorElementos(prod, el) {
    let contenedor = document.createElement(`ul`);
    contenedor.setAttribute("class", "list-group list-group-flush")
    for (const p in prod) {
  
      contenedor.innerHTML = `<li class="list-group-item">NOMBRE: ${prod.nombre}</li> 
                              <li class="list-group-item">BODEGA: ${prod.bodega}</li>
                              <li class="list-group-item">TIPO: ${prod.tipo}</li> 
                              <li class="list-group-item">OJOS: ${prod.color}</li> 
                              <li class="list-group-item">NARIZ: ${prod.aroma}</li> 
                              <li class="list-group-item">BOCA: ${prod.sabor}</li> 
                              <li class="list-group-item">VALOR: $${prod.valor}</li>`;
      let elemento = document.getElementById(el);
     elemento.appendChild(contenedor);
    } 
  }
  function busquedaValor(arr) {
    let valorMaximo = Number(prompt(`Ingrese el Valor MÁXIMO del producto`));
    let valorMinimo = Number(prompt(`Ingrese el Valor MÍNIMO del producto`));
    let resultadoBusquedaValor = arr.filter(
      (obj) => obj.valor <= valorMaximo && obj.valor >= valorMinimo
    );
    let objVacioV;
    if (
      (objVacioV = Object.keys(resultadoBusquedaValor).length === 0) &&
      (objVacioV = Object.keys(resultadoBusquedaValor).length === 0)
    ) {
      alert(`No encontramos productos con los criterios ingresados`);
    } else {
      let caract = "";
      for (const p of resultadoBusquedaValor) {
        caract +=
      `NOMBRE: ${p.nombre} 
        BODEGA: ${p.bodega} 
        TIPO: ${p.tipo} 
        OJOS: ${p.color} 
        NARIZ: ${p.aroma} 
        BOCA: ${p.sabor} 
        VALOR: $${p.valor}
        \n`;
      }
      alert(caract);
    }
  }
  function busqueda(arr) {
    let busqueda = prompt(`Busqueda por NOMBRE o TIPO DE BEBIDA:`);
    busquedaMin = busqueda.toLowerCase();
    let resultadoBusquedaNombre = arr.filter((obj) => obj.nombre.includes(busquedaMin));
    let resultadoBusquedaTipo = arr.filter((obj) => obj.tipo.includes(busquedaMin));
    console.log(resultadoBusquedaNombre);
    console.log(resultadoBusquedaTipo);
    let objVacio;
    if (
      (objVacio = Object.keys(resultadoBusquedaNombre).length === 0) &&
      (objVacio = Object.keys(resultadoBusquedaTipo).length === 0)
    ) {
      alert(`No encontramos productos con los criterios ingresados`);
    } else {
      let caract = "";
      for (const p of resultadoBusquedaNombre) {
        caract +=
        `NOMBRE: ${p.nombre} 
        BODEGA: ${p.bodega} 
        TIPO: ${p.tipo} 
        OJOS: ${p.color} 
        NARIZ: ${p.aroma} 
        BOCA: ${p.sabor} 
        VALOR: $${p.valor}
        \n`;
      }
      for (const p of resultadoBusquedaTipo) {
        caract +=
        `NOMBRE: ${p.nombre} 
        BODEGA: ${p.bodega} 
        TIPO: ${p.tipo} 
        OJOS: ${p.color} 
        NARIZ: ${p.aroma} 
        BOCA: ${p.sabor} 
        VALOR: $${p.valor}
        \n`;
      }
      alert(caract);
    }
  }
  function caractProducto(prod) {
    let caract = "";
    for (const p in prod) {
      caract += p.toUpperCase() + " : " + prod[p] + "\n";
    }
    alert(caract);
  }
  class valorProducto {
    constructor(valor, cantidad) {
      this.valor = valor;
      this.cantidad = cantidad;
      this.iva = 0.21 * (this.valor * this.cantidad);
      this.descuento = 0.2 * (this.valor * this.cantidad);
      this.valorTotal = this.valor * this.cantidad + this.iva;
      this.valorTotalDescuento = this.valor * this.cantidad + this.iva - this.descuento;
    }
  }
  function productoSinDesc(v) {
    alert(`
      El valor de su compra es de:
      Valor: $ ${v.valor * v.cantidad}
      IVA: $ ${v.iva}
      Valor Total: $ ${v.valor * v.cantidad + v.iva}`);
  }
  function productoConDesc(vd) {
    alert(`
    El valor de su compra es de:
    Valor: $ ${vd.valor * vd.cantidad}
    IVA: $ ${vd.iva}
    Descuento: -$ ${vd.descuento}
    Valor Total: $ ${vd.valor * vd.cantidad + vd.iva - vd.descuento}`);
  }

  while (productoSeleccionadoMin != `salir`) {
    let menuBebida;
    let menuBebidaMin;

    let productos = [
      {
        nombre: `syrah`,
        bodega: `finca El boleado`,
        tipo: `vino tinto`,
        color: `rojo purpureo`,
        aroma: `chocolate, coco y carbón.`,
        sabor: `frutal, suave y sedoso`,
        valor: 900,
      },
      {
        nombre: `vermouth`,
        bodega: `finca El Boleado`,
        tipo: `aperitivo`,
        color: `rojo rubí`,
        aroma: `pimienta, hierbas frescas y sierra cordobesa.`,
        sabor: `refrescante y especiado.`,
        valor: 750,
      },
      {
        nombre: `bonarda`,
        bodega: `finca El Boleado`,
        tipo: `vino tinto`,
        color: `rojo intenso.`,
        aroma: `remembranza a maleza y hiervas.`,
        sabor: `largo final en boca con notas de cafe y madera.`,
        valor: 1200,
      },
      {
        nombre: `viognier`,
        bodega: `finca El Boleado`,
        tipo: `vino blanco`,
        color: `amarillo brillante con reflejos dorados.`,
        aroma: `dulce con notas de miel.`,
        sabor: `muy fresco, frutado y levemente ácido.`,
        valor: 1100,
      },
    ];
 

    switch (productoSeleccionadoMin) {
      case `syrah`:
        creadorElementos(productos[0], `elementoSyrah`);
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            caractProducto(productos[0]);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $900 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorSyrah = new valorProducto(
              900,
              Number(
                prompt(`Cuantas unidades desea adquirir?
                  Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorSyrah.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorSyrah.cantidad <= 2 && valorSyrah.cantidad > 0) {
              productoSinDesc(valorSyrah);
              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valor * valorSyrah.cantidad + valorSyrah.iva);
              carrito.push(valorSyrah.valorTotal);
            } else if (valorSyrah.cantidad >= 3) {
              productoConDesc(valorSyrah);
              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valorTotalDescuento);
              carrito.push(valorSyrah.valorTotalDescuento);
            }
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Para ver un producto primero seleccionelo y luego explore el producto en la pagina:
              -Syrah
              -Vermouth
              -Bonarda
              -Viognier
              -Mi carrito
              -Buscar
              -Busqueda por VALOR
              -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `vermouth`:
        creadorElementos(productos[1], `elementoVermouth`);
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            caractProducto(productos[1]);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $750 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorVermouth = new valorProducto(
              750,
              Number(
                prompt(`Cuantas unidades desea adquirir?
            Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorVermouth.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorVermouth.cantidad <= 2) {
              productoSinDesc(valorVermouth);

              carritoCantidadVermouth.push(valorVermouth.cantidad);
              carritoValorVermouth.push(valorVermouth.valorTotal);
              carrito.push(valorVermouth.valorTotal);
            } else if (valorVermouth.cantidad >= 3) {
              productoConDesc(valorVermouth);

              carritoCantidadVermouth.push(valorVermouth.cantidad);
              carritoValorVermouth.push(valorVermouth.valorTotalDescuento);
              carrito.push(valorVermouth.valorTotalDescuento);
            }
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Para ver un producto primero seleccionelo y luego explore el producto en la pagina:
              -Syrah
              -Vermouth
              -Bonarda
              -Viognier
              -Mi carrito
              -Buscar
              -Busqueda por VALOR
              -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `bonarda`:
        creadorElementos(productos[2], `elementoBonarda`);
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            caractProducto(productos[2]);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $1200 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorBonarda = new valorProducto(
              1200,
              Number(
                prompt(`Cuantas unidades desea adquirir
            Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorBonarda.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorBonarda.cantidad <= 2) {
              productoSinDesc(valorBonarda);

              carritoCantidadBonarda.push(valorBonarda.cantidad);
              carritoValorBonarda.push(valorBonarda.valorTotal);
              carrito.push(valorBonarda.valorTotal);
            } else if (valorBonarda.cantidad >= 3) {
              productoConDesc(valorBonarda);

              carritoCantidadBonarda.push(valorBonarda.cantidad);
              carritoValorBonarda.push(valorBonarda.valorTotalDescuento);
              carrito.push(valorBonarda.valorTotalDescuento);
            }
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Para ver un producto primero seleccionelo y luego explore el producto en la pagina:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `viognier`:
        creadorElementos(productos[3], `elementoViognier`);
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);
        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();
        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            caractProducto(productos[3]);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $1100 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorViognier = new valorProducto(
              1100,
              Number(
                prompt(`Cuantas unidades desea adquirir
            Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorViognier.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorViognier.cantidad <= 2) {
              productoSinDesc(valorViognier);

              carritoCantidadViognier.push(valorViognier.cantidad);
              carritoValorViognier.push(valorViognier.valorTotal);
              carrito.push(valorViognier.valorTotal);
            } else if (valorViognier.cantidad >= 3) {
              productoConDesc(valorViognier);

              carritoCantidadViognier.push(valorViognier.cantidad);
              carritoValorViognier.push(valorViognier.valorTotalDescuento);
              carrito.push(valorViognier.valorTotalDescuento);
            }
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Para ver un producto primero seleccionelo y luego explore el producto en la pagina:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `mi carrito`:
        let contCarrito = document.createElement(`div`);
        contCarrito.className = "d-flex flex-column";
        contCarrito.innerHTML = 
        `<h2>CARRITO:</h2>
        <h3>Syrah:</h3>
        <h5>Cantidad:</h5> <p>${cantidadCarrito(carritoCantidadSyrah)} botellas.</p>
        <h5>Valor:</h5> <p>$${valorCarrito(carritoValorSyrah)}.</p>

        <h3>Vermouth:</h3>
        <h5>Cantidad:</h5> <p>${cantidadCarrito(carritoCantidadVermouth)} botellas.</p>
        <h5>Valor:</h5> <p>$${valorCarrito(carritoValorVermouth)}.</p>

        <h3>Bonarda:</h3>
        <h5>Cantidad:</h5> <p>${cantidadCarrito(carritoCantidadBonarda)} botellas.</p>
        <h5>Valor:</h5> <p>$${valorCarrito(carritoValorBonarda)}.</p>

        <h3>Viognier:</h3>
        <h5>Cantidad:</h5> <p>${cantidadCarrito(carritoCantidadViognier)} botellas.</p>
        <h5>Valor:</h5> <p>$${valorCarrito(carritoValorViognier)}.</p>

        <h4>El valor total de su compra es de $ ${valorCarrito(carrito)}</h4>`
        let divCarrito = document.getElementById(`carrito`);
        divCarrito.appendChild(contCarrito);

        productoSeleccionado = prompt(`Para ver un producto primero seleccionelo y luego explore el producto en la pagina:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `buscar`:
        busqueda(productos);

        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
        -Syrah
        -Vermouth
        -Bonarda
        -Viognier
        -Mi carrito
        -Buscar
        -Busqueda por VALOR
        -Salir`);
        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;

      case `busqueda por valor`:
        busquedaValor(productos);

        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
        -Syrah
        -Vermouth
        -Bonarda
        -Viognier
        -Mi carrito
        -Buscar
        -Busqueda por VALOR
        -Salir`);
        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;

      default:
        productoSeleccionado =
          prompt(`El producto seleccionado no es comercializado por nuestra tienda. 
          Por favor seleccione un producto de la lista:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);
        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
    }
  }
} else if (edad < 18) {
  let loSiento = document.createElement(`div`);
  loSiento.innerHTML = `<h2> Verdaderamente lo siento pero eres menor de edad y no puedes entrar :-(</h2>`;
  let msjChau = document.getElementById(`msjMenor`);
  msjChau.append(loSiento);
}
alert("Gracias por su visita!");
