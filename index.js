import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";

import fs from 'fs';

// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores = fs.readFileSync("data/sabores.json", "utf-8");
let productos = fs.readFileSync("data/productos.json", "utf-8");
let pedido = fs.readFileSync("data/pedidos.json", "utf-8");
// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

let pedidofinal = JSON.parse(pedido);

sabores.push(sabores);

// 4) Convertir el array a JSON con identación (2 espacios)
let nuevoJson = JSON.stringify(nombres, null, 2);

// 5) Escribir el archivo actualizado
fs.writeFileSync("nombres.json", nuevoJson);
// Guardar pedido
// COMPLETEN USTEDES
