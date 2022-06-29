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

  const carritoCantidadSyrah = [];
  const carritoValorSyrah = [];
  const carritoCantidadVermouth = [];
  const carritoValorVermouth = [];
  const carritoCantidadBonarda = [];
  const carritoValorBonarda = [];
  const carritoCantidadViognier = [];
  const carritoValorViognier = [];

  const carrito = [];

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

    class valorProducto {
      constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.valorParcial = valor * cantidad;
        this.iva = 0.21 * this.valorParcial;
        this.descuento = 0.2 * this.valorParcial;
        this.valorTotal = this.valorParcial + this.iva;
        this.valorTotalDescuento = this.valorParcial + this.iva - this.descuento;
      }
    }

    switch (productoSeleccionadoMin) {
      case `syrah`:
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
            const caracSyrah = new caracteristicas(
              `Finca El Boleado`,
              `Rojo purpureo`,
              `Chocolate, coco y carbón.`,
              `Frutal, suave y sedoso`
            );
            alert(`${caracSyrah.bodega}
              ${caracSyrah.color}
              ${caracSyrah.aroma}
              ${caracSyrah.sabor}`);
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
                alert(`Por favor ingrese un numero distinto de 0`)
            } else if (valorSyrah.cantidad <= 2 && valorSyrah.cantidad > 0) {
              alert(
                `El valor de su compra es de:
                      Valor: $ ${valorSyrah.valorParcial} 
                      IVA: $ ${valorSyrah.iva}
                      Valor total: $ ${valorSyrah.valorTotal}`
              );

              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valorTotal);
              carrito.push(valorSyrah.valorTotal);

            } else if (valorSyrah.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
                        Valor: $ ${valorSyrah.valorParcial} 
                        IVA: $ ${valorSyrah.iva}
                        Descuento: -$ ${valorSyrah.descuento}
                        Valor total: $ ${valorSyrah.valorTotalDescuento}`);

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
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracVermouth = new caracteristicas(
              `Finca El Boleado`,
              `Rojo rubí`,
              `Pimienta, hierbas frescas y sierra cordobesa.`,
              `Refrescante y especiado.`
            );
            alert(`${caracVermouth.bodega}
            ${caracVermouth.color}
            ${caracVermouth.aroma}
            ${caracVermouth.sabor}`);
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
            if (valorSyrah.cantidad === 0) {
                alert(`Por favor ingrese un numero distinto de 0`)
            } else if (valorVermouth.cantidad <= 2) {
              alert(`El valor de su compra es de:
              Valor: $ ${valorVermouth.valorParcial} 
              IVA: $ ${valorVermouth.iva}
              Valor total: $ ${valorVermouth.valorTotal}`);

              carritoCantidadVermouth.push(valorVermouth.cantidad);
              carritoValorVermouth.push(valorVermouth.valorTotal);
              carrito.push(valorVermouth.valorTotal);

            } else if (valorVermouth.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
              Valor: $ ${valorVermouth.valorParcial} 
              IVA: $ ${valorVermouth.iva}
              Descuento: -$ ${valorVermouth.descuento}
              Valor total: $ ${valorVermouth.valorTotalDescuento}`);

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
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
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
            alert(`${caracBonarda.bodega}
            ${caracBonarda.color}
            ${caracBonarda.aroma}
            ${caracBonarda.sabor}`);
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
            if (valorSyrah.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`)
            } else if (valorBonarda.cantidad <= 2) {
              alert(
                `El valor de su compra es de:
                      Valor: $ ${valorBonarda.valorParcial} 
                      IVA: $ ${valorBonarda.iva}
                      Valor total: $ ${valorBonarda.valorTotal}`
              );

              carritoCantidadBonarda.push(valorBonarda.cantidad);
              carritoValorBonarda.push(valorBonarda.valorTotal);
              carrito.push(valorBonarda.valorTotal);

            } else if (valorBonarda.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
              Valor: $ ${valorBonarda.valorParcial} 
              IVA: $ ${valorBonarda.iva}
              Descuento: -$ ${valorBonarda.descuento}
              Valor total: $ ${valorBonarda.valorTotalDescuento}`);

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
        Por favor ingrese que desearía saber o hacer usted con este producto?`);
        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
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
              `Muy fresco, frutado y levemente ácido.`
            );
            alert(`${caracViognier.bodega}
            ${caracViognier.color}
            ${caracViognier.aroma}
            ${caracViognier.sabor}`);
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
            if (valorSyrah.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`)
            } else if (valorViognier.cantidad <= 2) {
              alert(
                `El valor de su compra es de:
                      Valor: $ ${valorViognier.valorParcial} 
                      IVA: $ ${valorViognier.iva}
                      Valor total: $ ${valorViognier.valorTotal}`
                );

              carritoCantidadViognier.push(valorViognier.cantidad);
              carritoValorViognier.push(valorViognier.valorTotal);
              carrito.push(valorViognier.valorTotal);

            } else if (valorViognier.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
              Valor: $ ${valorViognier.valorParcial} 
              IVA: $ ${valorViognier.iva}
              Descuento: -$ ${valorViognier.descuento}
              Valor total: $ ${valorViognier.valorTotalDescuento}`);

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
        let cantidadSyrah = 0;
        for (let i = 0; i < carritoCantidadSyrah.length; i++) {
          cantidadSyrah += carritoCantidadSyrah[i];
        }
        let valorParcialSyrah = 0;
        for (let i = 0; i < carritoValorSyrah.length; i++) {
          valorParcialSyrah += carritoValorSyrah[i];
        }

        let cantidadVermouth = 0;
        for (let i = 0; i < carritoCantidadVermouth.length; i++) {
          cantidadVermouth += carritoCantidadVermouth[i];
        }
        let valorParcialVermouth = 0;
        for (let i = 0; i < carritoValorVermouth.length; i++) {
          valorParcialVermouth += carritoValorVermouth[i];
        }
        let cantidadBonarda = 0;
        for (let i = 0; i < carritoCantidadBonarda.length; i++) {
          cantidadBonarda += carritoCantidadBonarda[i];
        }
        let valorParcialBonarda = 0;
        for (let i = 0; i < carritoValorBonarda.length; i++) {
          valorParcialBonarda += carritoValorBonarda[i];
        }
        let cantidadViognier = 0;
        for (let i = 0; i < carritoCantidadViognier.length; i++) {
          cantidadViognier += carritoCantidadViognier[i];
        }
        let valorParcialViognier = 0;
        for (let i = 0; i < carritoValorViognier.length; i++) {
          valorParcialViognier += carritoValorViognier[i];
        }

        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
          total += carrito[i];
        }
        console.log(total);

        alert(
          `Syrah: 
        Cantidad: ${cantidadSyrah} botellas. 
        Valor: $${valorParcialSyrah}.

        Vermouth:
        Cantidad: ${cantidadVermouth} botellas.
        Valor: $${valorParcialVermouth}.

        Bonarda:
        Cantidad: ${cantidadBonarda} botellas.
        Valor: $${valorParcialBonarda}.

        Viognier:
        Cantidad: ${cantidadViognier} botellas.
        Valor: $${valorParcialViognier}.

        El valor total de su compra es de $ ${total}`
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
