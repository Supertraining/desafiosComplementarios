let edad = prompt(`Bienvenido a la tienda de Finca El Boleado!! 
Para ingresar usted debe ser mayor de edad. 
Ingrese su edad por favor:`);

while (isNaN(edad)) {
  edad = prompt(`El valor ingresado es incorrecto.
  Ingrese otro valor por favor:`);
}

if (edad >= 18) {
  let productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
            -Syrah
            -Vermouth
            -Bonarda
            -Viognier
            -Mi carrito
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

  function cantidadCarrito (arr) {
     return arr.reduce((a,b) => a+b);
  }
  function valorCarrito (arrv) {
    return arrv.reduce((a,b) => a+b);
  }
  
  
  while (productoSeleccionadoMin != `salir`) {
    let menuBebida;
    let menuBebidaMin;

    class caracteristicas {
      constructor(bodega, color, aroma, sabor) {
        this.bodega = `BODEGA: ${bodega}`;
        this.color = `OJOS: ${color}`;
        this.aroma = `NARIZ: ${aroma}`;
        this.sabor = `BOCA: ${sabor}`;
      }
    }
    function caractProducto(o) {
      let out = '';
      for (const p in o) {
        out += o[p] + '\n';
      }
      alert(out);
    }

    class valorProducto {
      constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.iva = 0.21 * (this.valor*this.cantidad);
        this.descuento = 0.2 *  (this.valor*this.cantidad);
        this.valorTotal = (this.valor*this.cantidad)+this.iva;
        this.valorTotalDescuento = ((this.valor*this.cantidad)+this.iva)-this.descuento;
      }
    }
    function productoSinDesc (v) {
        alert(`
        El valor de su compra es de:
        Valor: $ ${v.valor*v.cantidad}
        IVA: $ ${v.iva}
        Valor Total: $ ${v.valor*v.cantidad+v.iva}`)
    }
    function productoConDesc (vd) {
      alert(`
      El valor de su compra es de:
      Valor: $ ${vd.valor*vd.cantidad}
      IVA: $ ${vd.iva}
      Descuento: -$ ${vd.descuento}
      Valor Total: $ ${vd.valor*vd.cantidad+vd.iva-vd.descuento}`)
    }

    switch (productoSeleccionadoMin) {
      case `syrah`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desear??a saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Caracter??sticas
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracSyrah = new caracteristicas(
              `Finca El Boleado`,
              `Rojo purpureo`,
              `Chocolate, coco y carb??n.`,
              `Frutal, suave y sedoso`
            );
            caractProducto(caracSyrah)
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $900 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorSyrah = new valorProducto(
              900,
              Number(
                prompt(`Cuantas unidades desea adquirir?
                  Le recordamos que adquiriendo 3 unidades o m??s del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorSyrah.cantidad === 0) {
                alert(`Por favor ingrese un numero distinto de 0`)
            } else if (valorSyrah.cantidad <= 2 && valorSyrah.cantidad > 0) {
              productoSinDesc(valorSyrah);
              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valor*valorSyrah.cantidad+valorSyrah.iva);
              carrito.push(valorSyrah.valorTotal);

            } else if (valorSyrah.cantidad >= 3) {
             productoConDesc(valorSyrah);
              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valorTotalDescuento);
              carrito.push(valorSyrah.valorTotalDescuento);
            }
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Caracter??sticas
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
              -Syrah
              -Vermouth
              -Bonarda
              -Viognier
              -Mi carrito
              -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `vermouth`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desear??a saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Caracter??sticas
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracVermouth = new caracteristicas(
              `Finca El Boleado`,
              `Rojo rub??`,
              `Pimienta, hierbas frescas y sierra cordobesa.`,
              `Refrescante y especiado.`
            );
            caractProducto(caracVermouth);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $750 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorVermouth = new valorProducto(
              750,
              Number(
                prompt(`Cuantas unidades desea adquirir?
            Le recordamos que adquiriendo 3 unidades o m??s del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorVermouth.cantidad === 0) {
                alert(`Por favor ingrese un numero distinto de 0`)
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
          -Caracter??sticas
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
              -Syrah
              -Vermouth
              -Bonarda
              -Viognier
              -Mi carrito
              -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `bonarda`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desear??a saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Caracter??sticas
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracBonarda = new caracteristicas(
              `Finca El Boleado`,
              `Rojo intenso.`,
              `Remembranza a maleza y hiervas.`,
              `Largo final en boca con notas de cafe y madera.`
            );
           caractProducto(caracBonarda);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $1200 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorBonarda = new valorProducto(
              1200,
              Number(
                prompt(`Cuantas unidades desea adquirir
            Le recordamos que adquiriendo 3 unidades o m??s del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorBonarda.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`)
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
          -Caracter??sticas
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `viognier`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desear??a saber o hacer usted con este producto?`);
        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Caracter??sticas
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();
        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracViognier = new caracteristicas(
              `Finca El Boleado`,
              `Amarillo brillante con reflejos dorados.`,
              `Dulce con notas de miel.`,
              `Muy fresco, frutado y levemente ??cido.`
            );
              caractProducto(caracViognier);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $1100 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorViognier = new valorProducto(
              1100,
              Number(
                prompt(`Cuantas unidades desea adquirir
            Le recordamos que adquiriendo 3 unidades o m??s del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorViognier.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`)
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
          -Caracter??sticas
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `mi carrito`:

        alert(
          `Syrah: 
        Cantidad: ${cantidadCarrito(carritoCantidadSyrah)} botellas. 
        Valor: $${valorCarrito(carritoValorSyrah)}.

        Vermouth:
        Cantidad: ${cantidadCarrito(carritoCantidadVermouth)} botellas.
        Valor: $${valorCarrito(carritoValorVermouth)}.

        Bonarda:
        Cantidad: ${cantidadCarrito(carritoCantidadBonarda)} botellas.
        Valor: $${valorCarrito(carritoValorBonarda)}.

        Viognier:
        Cantidad: ${cantidadCarrito(carritoCantidadViognier)} botellas.
        Valor: $${valorCarrito(carritoValorViognier)}.

        El valor total de su compra es de $ ${valorCarrito(carrito)}`
        );

        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
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
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
    }
  }
} else if (edad < 18) {
  alert(`Eres menor de edad. 
  No puedes entrar.`);
}
alert("Gracias por su visita!");
