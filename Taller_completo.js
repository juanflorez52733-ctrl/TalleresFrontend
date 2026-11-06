/* TALLER DE JAVASCRIPT PARA FRONTEND - archivo consolidado de consulta.
   Los archivos individuales requeridos están en la carpeta js/. */


// ================ EJERCICIO 01 ================
(function(){console.log("EJERCICIO 01");
function validarRegistro(nombre,edad,aceptaTerminos){
 if(typeof nombre!=="string"||nombre.trim()==="") return "El nombre es obligatorio";
 else if(typeof edad!=="number"||!Number.isInteger(edad)||edad<18||edad>120) return "La edad debe ser un número entero entre 18 y 120";
 else if(aceptaTerminos!==true) return "Debe aceptar los términos";
 else return "Registro válido";
}
console.log(validarRegistro("Ana",20,true));
console.log(validarRegistro("   ",20,true));
console.log(validarRegistro("Luis",17,true));
console.log(validarRegistro("Eva",25,false));
console.log(validarRegistro("Ana",20.5,true));
})();

// ================ EJERCICIO 02 ================
(function(){console.log("EJERCICIO 02");
function cargarPorLotes(total,tamanoLote){
 if(!Number.isInteger(total)||total<0||!Number.isInteger(tamanoLote)||tamanoLote<=0)return null;
 let cargado=0,lotes=0;const cargas=[];
 while(cargado<total){const cantidad=Math.min(tamanoLote,total-cargado);cargas.push(cantidad);cargado+=cantidad;lotes++;}
 return {cargas,lotes,totalCargado:cargado};
}
console.log(cargarPorLotes(23,5));console.log(cargarPorLotes(0,5));console.log(cargarPorLotes(3,5));console.log(cargarPorLotes(-1,5));console.log(cargarPorLotes(10,0));
})();

// ================ EJERCICIO 03 ================
(function(){console.log("EJERCICIO 03");
function simularMenu(opciones){
 const mensajes=[];let indice=0,salir=false;
 if(opciones.length===0)return ["Sin más opciones"];
 do{const opcion=opciones[indice];
  if(opcion==="ver")mensajes.push("Mostrando información");
  else if(opcion==="ayuda")mensajes.push("Mostrando ayuda");
  else if(opcion==="salir"){mensajes.push("Cerrando menú");salir=true;}
  else mensajes.push("Opción inválida");
  indice++;
 }while(!salir&&indice<opciones.length);
 if(!salir)mensajes.push("Sin más opciones");return mensajes;
}
console.log(simularMenu(["ver","otra","salir","ayuda"]));console.log(simularMenu(["salir"]));console.log(simularMenu([]));
})();

// ================ EJERCICIO 04 ================
(function(){console.log("EJERCICIO 04");
function calcularCompra(precio){
 const subtotal=precio*0.9;const envio=subtotal>=100?0:10;const total=subtotal+envio;
 let envioConIf;if(subtotal>=100)envioConIf=0;else envioConIf=10;
 return {precio,subtotal,envio,total,envioConIf};
}
console.log(calcularCompra(80));console.log(calcularCompra(100));console.log(calcularCompra(120));
})();

// ================ EJERCICIO 05 ================
(function(){console.log("EJERCICIO 05");
function indicadoresPrecios(precios){
 let suma=0,cantidad=0;
 for(let i=0;i<precios.length;i++){suma+=precios[i];if(precios[i]>=100)cantidad++;}
 return {suma,promedio:precios.length===0?null:suma/precios.length,cantidad};
}
console.log(indicadoresPrecios([80,150,40,230]));console.log(indicadoresPrecios([]));console.log(indicadoresPrecios([200]));console.log(indicadoresPrecios([50,100,150]));
})();

// ================ EJERCICIO 06 ================
(function(){console.log("EJERCICIO 06");
function mensajePedido(estado){switch(estado){
 case "pendiente":return "Pendiente de pago";case "pagado":return "Pago confirmado";
 case "enviado":return "Pedido en camino";case "entregado":return "Pedido entregado";
 default:return "Estado desconocido";
}}
["pendiente","pagado","enviado","entregado","cancelado"].forEach(e=>console.log(e,mensajePedido(e)));
})();

// ================ EJERCICIO 07 ================
(function(){console.log("EJERCICIO 07");
function saludarUsuario(nombre){const limpio=nombre.trim();return limpio===""?"Bienvenida o bienvenido, visitante":`Bienvenida o bienvenido, ${limpio}`;}
console.log(saludarUsuario(" Laura "));console.log(saludarUsuario(""));console.log(saludarUsuario("Carlos"));console.log(saludarUsuario("   "));
})();

// ================ EJERCICIO 08 ================
(function(){console.log("EJERCICIO 08");
function calcularTotal(precio,cantidad=1,descuento=0){
 if(typeof precio!=="number"||!Number.isFinite(precio)||precio<0)return null;
 if(!Number.isInteger(cantidad)||cantidad<=0)return null;
 if(typeof descuento!=="number"||!Number.isFinite(descuento)||descuento<0||descuento>1)return null;
 return precio*cantidad*(1-descuento);
}
console.log(calcularTotal(100,3,.10));console.log(calcularTotal(100));console.log(calcularTotal(100,0));console.log(calcularTotal(200,2,.15));console.log(calcularTotal(100,2,1.5));
})();

// ================ EJERCICIO 09 ================
(function(){console.log("EJERCICIO 09");
const aplicarDescuento=function(precio,porcentaje){
 if(typeof precio!=="number"||!Number.isFinite(precio)||precio<0)return null;
 if(typeof porcentaje!=="number"||!Number.isFinite(porcentaje)||porcentaje<0||porcentaje>100)return null;
 return precio*(1-porcentaje/100);
};
console.log(aplicarDescuento(200,25));console.log(aplicarDescuento(100,0));console.log(aplicarDescuento(200,110));console.log(aplicarDescuento(-50,10));console.log(aplicarDescuento(100,50));
})();

// ================ EJERCICIO 10 ================
(function(){console.log("EJERCICIO 10");
const calcularIVA=(precio,tasa=.19)=>precio*tasa;
const precioConIVA=(precio,tasa=.19)=>precio+calcularIVA(precio,tasa);
console.log(calcularIVA(100,.19));console.log(precioConIVA(100,.19));console.log(calcularIVA(100,0));console.log(precioConIVA(0));
})();

// ================ EJERCICIO 11 ================
(function(){console.log("EJERCICIO 11");
function sumarNotificaciones(n){if(!Number.isInteger(n)||n<0||n>100)return null;if(n===0)return 0;return n+sumarNotificaciones(n-1);}
console.log(sumarNotificaciones(4));console.log(sumarNotificaciones(0));console.log(sumarNotificaciones(-1));console.log(sumarNotificaciones(5));console.log(sumarNotificaciones(101));
})();

// ================ EJERCICIO 12 ================
(function(){console.log("EJERCICIO 12");
const tema="claro";
function mostrarTema(){const tema="oscuro";if(true){const tema="contraste";console.log(tema);}console.log(tema);}
mostrarTema();console.log(tema);
try{{let color="azul";console.log("Dentro:",color);}console.log(color);}catch(error){console.log("Acceso externo a let:",error.name);}
if(true){var colorVar="verde";}console.log("var fuera del bloque:",colorVar);
})();

// ================ EJERCICIO 13 ================
(function(){console.log("EJERCICIO 13");
function crearContador(inicial=0){let contador=inicial;return {
 incrementar:function(){contador++;return contador;},
 obtenerValor:function(){return contador;},
 reiniciar:function(){contador=inicial;return contador;}
};}
const a=crearContador(5);console.log(a.obtenerValor(),a.incrementar(),a.incrementar(),a.reiniciar());
const b=crearContador(0);console.log(b.obtenerValor(),b.incrementar());console.log("A independiente:",a.obtenerValor());
})();

// ================ EJERCICIO 14 ================
(function(){console.log("EJERCICIO 14");
const categorias=["Tecnología","Hogar","Libros"];console.log(categorias.length,categorias[0],categorias[categorias.length-1]);
categorias[1]="Deportes";const copia=[...categorias];copia.push("Moda");
console.log("Original:",categorias,"Copia:",copia,"Longitudes:",categorias.length,copia.length);
const uno=["Música"],vacio=[];console.log(uno[0],vacio.length?vacio[vacio.length-1]:"No existe");
})();

// ================ EJERCICIO 15 ================
(function(){console.log("EJERCICIO 15");
const favoritos=["Inicio","Productos","Contacto"];console.log("Inicial:",favoritos);
console.log("push retorna:",favoritos.push("Ayuda"),favoritos);
console.log("pop retorna:",favoritos.pop(),favoritos);
console.log("unshift retorna:",favoritos.unshift("Perfil"),favoritos);
console.log("shift retorna:",favoritos.shift(),favoritos);
console.log("splice retorna:",favoritos.splice(1,1,"Catálogo"),favoritos);
const lista1=["A","B"];lista1.push("C");console.log(lista1);
const lista2=["Rojo","Verde","Azul"];lista2.splice(1,1,"Amarillo");console.log(lista2);
})();

// ================ EJERCICIO 16 ================
(function(){console.log("EJERCICIO 16");
function resumenForOf(lista){let total=0,agotados=0;for(const x of lista){total+=x;if(x===0)agotados++;}return {total,agotados};}
function resumenForEach(lista){let total=0,agotados=0;lista.forEach(x=>{total+=x;if(x===0)agotados++;});return {total,agotados};}
const datos=[3,0,7,2,0];console.log(resumenForOf(datos));console.log(resumenForEach(datos));console.log(resumenForOf([]));console.log(resumenForEach([0,0,0]));
})();

// ================ EJERCICIO 17 ================
(function(){console.log("EJERCICIO 17");
const productos=[{id:1,nombre:"Mouse",stock:4},{id:2,nombre:"Teclado",stock:0},{id:3,nombre:"Monitor",stock:2}];
function buscar(lista,id){const producto=lista.find(p=>p.id===id);const posicion=lista.findIndex(p=>p.id===id);const hayAgotados=lista.some(p=>p.stock===0);return {producto:producto||"Producto no encontrado",posicion,hayAgotados};}
console.log(buscar(productos,2));console.log(buscar(productos,1));console.log(buscar(productos,10));console.log(buscar([],1));
})();

// ================ EJERCICIO 18 ================
(function(){console.log("EJERCICIO 18");
const precios=[100,25,8,250,40];
console.log("Original:",precios);
console.log("Asc:",[...precios].sort((a,b)=>a-b));
console.log("Desc:",[...precios].sort((a,b)=>b-a));
console.log("Sin comparador:",[...precios].sort());
console.log("Repetidos:",[5,5,1].sort((a,b)=>a-b));console.log("Vacío:",[].sort((a,b)=>a-b));
})();

// ================ EJERCICIO 19 ================
(function(){console.log("EJERCICIO 19");
function calcularOfertas(precios){const descontados=precios.map(p=>p*.9);const seleccionados=descontados.filter(p=>p<=100);const suma=seleccionados.reduce((ac,p)=>ac+p,0);return {descontados,seleccionados,suma};}
console.log(calcularOfertas([50,120,80,200]));console.log(calcularOfertas([]));console.log(calcularOfertas([200,300,500]));
})();

// ================ EJERCICIO 20 ================
(function(){console.log("EJERCICIO 20");
const sala=[[0,1,0],[1,1,0],[0,0,0]];
function contar(m){const porFila=[];let total=0;for(let i=0;i<m.length;i++){let libres=0;for(let j=0;j<m[i].length;j++){if(m[i][j]===0){libres++;total++;}}porFila.push(libres);}return {libresPorFila:porFila,totalLibres:total};}
function reservar(m,f,c){if(!Number.isInteger(f)||!Number.isInteger(c)||f<0||f>=m.length||!Array.isArray(m[f])||c<0||c>=m[f].length)return false;if(m[f][c]!==0)return false;m[f][c]=1;return true;}
console.log(contar(sala));console.log(reservar(sala,0,0),contar(sala));console.log(reservar(sala,0,0));console.log(reservar(sala,10,0));
})();

// ================ EJERCICIO 21 ================
(function(){console.log("EJERCICIO 21");
function sinDuplicados(categorias){const resultado=[];for(const categoria of categorias){if(!resultado.includes(categoria))resultado.push(categoria);}return resultado;}
console.log(sinDuplicados(["web","css","web","js","css"]));console.log(sinDuplicados([]));console.log(sinDuplicados(["html","html","html"]));console.log(sinDuplicados(["web","Web","web"]));
})();

// ================ EJERCICIO 22 ================
(function(){console.log("EJERCICIO 22");
const producto={id:1,nombre:"Mouse",precio:50000,stock:5};console.log(producto.nombre,producto.precio,producto["id"],producto["stock"]);
producto.categoria="Tecnología";producto.precio=55000;console.log(producto);
function vender(p,c){if(!Number.isInteger(c)||c<=0||c>p.stock)return false;p.stock-=c;return true;}
console.log(vender(producto,2),producto.stock);console.log(vender(producto,4),producto.stock);console.log(vender(producto,-1),producto.stock);
})();

// ================ EJERCICIO 23 ================
(function(){console.log("EJERCICIO 23");
function crearPreferencias(nombre,tema,clave,valor){if(clave.trim()===""||clave==="nombre"||clave==="tema")return null;return {nombre,tema,[clave]:valor};}
console.log(crearPreferencias("Ana","oscuro","idioma","es"));
console.log(crearPreferencias("Carlos","claro","notificaciones",true));
console.log(crearPreferencias("Laura","oscuro","nombre","Pedro"));
console.log(crearPreferencias("Juan","claro"," ","es"));
})();

// ================ EJERCICIO 24 ================
(function(){console.log("EJERCICIO 24");
function resumir(inventario){const nombres=Object.keys(inventario),cantidades=Object.values(inventario),entradas=Object.entries(inventario);let total=0;const agotados=[],resumen=[];
for(const [nombre,cantidad] of entradas){total+=cantidad;resumen.push(nombre+": "+cantidad+" unidades");if(cantidad===0)agotados.push(nombre);}
return {nombres,cantidades,totalUnidades:total,agotados,resumen};}
console.log(resumir({mouse:4,teclado:2,monitor:0}));console.log(resumir({}));console.log(resumir({audifonos:3}));
})();

// ================ EJERCICIO 25 ================
(function(){console.log("EJERCICIO 25");
function obtenerCiudad(usuario){return usuario?.perfil?.direccion?.ciudad??"Sin ciudad";}
function obtenerPuntos(usuario){return usuario?.perfil?.puntos??"Sin puntos";}
const u={perfil:{direccion:{ciudad:"Manizales"},puntos:0}};
console.log(obtenerCiudad(u),obtenerPuntos(u));console.log(obtenerCiudad({}),obtenerPuntos({}));console.log(obtenerCiudad(null),obtenerPuntos(null));console.log(obtenerCiudad(undefined),obtenerPuntos(undefined));
})();

// ================ EJERCICIO 26 ================
(function(){console.log("EJERCICIO 26");
const texto="frontend",precio=25.5;const mayusculas=texto.toUpperCase(),formateado=precio.toFixed(2);
console.log("Originales:",texto,precio);console.log("Resultados:",mayusculas,formateado);console.log("Tipos:",typeof mayusculas,typeof formateado);
console.log("Vacío y cero:","".toUpperCase(),(0).toFixed(2));console.log("Otra prueba:","JavaScript".toUpperCase(),(100).toFixed(2));
})();

// ================ EJERCICIO 27 ================
(function(){console.log("EJERCICIO 27");
function prepararTitulo(texto){const titulo=texto.trim();if(titulo==="")return null;return {titulo,longitud:titulo.length,ruta:titulo.toLowerCase().replace(/ +/g,"-")};}
console.log(prepararTitulo("  Curso de JavaScript  "));console.log(prepararTitulo("Aprender    JavaScript"));console.log(prepararTitulo("       "));console.log(prepararTitulo("Programacion Web 2026"));
})();

// ================ EJERCICIO 28 ================
(function(){console.log("EJERCICIO 28");
function convertirPrecio(entrada){if(entrada.trim()==="")return null;const numero=Number(entrada);if(!Number.isFinite(numero)||numero<0)return null;return {numero,etiqueta:numero.toFixed(2)};}
console.log(convertirPrecio("1250.5"));console.log(convertirPrecio("abc"));console.log(convertirPrecio("Infinity"));console.log(convertirPrecio(""));console.log(convertirPrecio("-2"));console.log(convertirPrecio("0"));
})();

// ================ EJERCICIO 29 ================
(function(){console.log("EJERCICIO 29");
function generarIdentificadores(entrada){const id=BigInt(entrada);return {primero:id.toString(),segundo:(id+1n).toString(),tercero:(id+2n).toString(),tipo:typeof id};}
console.log(generarIdentificadores("9007199254740993"));
const texto="9007199254740993";console.log("Number:",Number(texto),typeof Number(texto));console.log("BigInt:",BigInt(texto),typeof BigInt(texto));
try{console.log(BigInt("42")+1);}catch(error){console.log("Error:",error.message);}
console.log("Suma válida:",BigInt("42")+1n);console.log(generarIdentificadores("0"));console.log(generarIdentificadores("42"));
})();

// ================ EJERCICIO 30 ================
(function(){console.log("EJERCICIO 30");
const producto={nombre:"Teclado",precio:80000};const s1=Symbol("interno"),s2=Symbol("interno");
producto[s1]="Código A";producto[s2]="Código B";
console.log(producto[s1],producto[s2]);console.log("¿Iguales?",s1===s2);
console.log("Claves normales:",Object.keys(producto));console.log("Claves Symbol:",Object.getOwnPropertySymbols(producto));
const s3=Symbol("codigo"),s4=Symbol("identificador");console.log("Descripciones distintas:",s3===s4);
console.log("Objeto sin símbolos:",Object.getOwnPropertySymbols({nombre:"Mouse"}));
})();
