# Taller de JavaScript para frontend

Solución organizada de los 30 ejercicios. Se conserva la estructura de entrega solicitada en la guía: `index.html`, carpeta `js/` con `ejercicio01.js` a `ejercicio30.js` y `README.md`. El archivo adicional `Taller_completo.js` reúne el código para consulta.

## Cómo ejecutar

1. Descarga y descomprime el proyecto.
2. Abre `index.html` en Chrome, Edge o Firefox.
3. Presiona **F12** y abre la pestaña **Consola**.
4. Los resultados aparecen identificados por número de ejercicio.

No requiere instalación de frameworks ni servicios externos. Los archivos JavaScript están encapsulados para evitar conflictos entre variables.

## Estructura

```text
taller_javascript_frontend/
├── index.html
├── README.md
├── Taller_completo.js
└── js/
    ├── ejercicio01.js
    ├── ...
    └── ejercicio30.js
```

## Explicaciones y registro de pruebas

Los resultados de la columna “Esperado” son los valores que se deben contrastar con la consola al ejecutar cada archivo.

### 01. Validación de formulario

Valida nombre, edad y aceptación de términos en orden usando if, else if y else.

| Entrada o acción | Resultado esperado |
|---|---|
| `("Ana",20,true)` | "Registro válido" |
| `nombre vacío` | error de nombre |
| `edad 17` | error de edad |
| `términos false` | error de términos |

### 02. Carga de elementos por lotes

Usa while para cargar lotes sin superar el total. Math.min calcula cuánto cargar en cada vuelta.

| Entrada o acción | Resultado esperado |
|---|---|
| `(23,5)` | 5 lotes: 5,5,5,5,3; total 23 |
| `(0,5)` | 0 lotes |
| `(3,5)` | 1 lote; total 3 |
| `(-1,5)` | null |

### 03. Simulación de menú

Procesa una secuencia con do...while; se detiene al recibir salir o al agotar opciones.

| Entrada o acción | Resultado esperado |
|---|---|
| `["ver","otra","salir","ayuda"]` | ver, inválida, cierre |
| `["salir"]` | cierre |
| `[]` | Sin más opciones |

### 04. Expresiones y declaraciones

Distingue declaraciones const/let y expresiones; compara ternario con if/else para el envío.

| Entrada o acción | Resultado esperado |
|---|---|
| `precio 80` | subtotal 72, envío 10, total 82 |
| `precio 100` | subtotal 90, envío 10, total 100 |
| `precio 120` | subtotal 108, envío 0, total 108 |

### 05. Indicadores de precios

Recorre con for clásico y calcula suma, promedio y cantidad de precios desde 100.

| Entrada o acción | Resultado esperado |
|---|---|
| `[80,150,40,230]` | suma 500; promedio 125; cantidad 2 |
| `[]` | 0; null; 0 |
| `[200]` | 200; 200; 1 |

### 06. Estado visible de un pedido

Traduce estados con switch. Cada caso retorna para evitar ejecutar los siguientes.

| Entrada o acción | Resultado esperado |
|---|---|
| `"pendiente"` | Pendiente de pago |
| `"pagado"` | Pago confirmado |
| `"enviado"` | Pedido en camino |
| `desconocido` | Estado desconocido |

### 07. Mensaje de bienvenida

Declara una función, limpia el nombre con trim y devuelve una plantilla de texto.

| Entrada o acción | Resultado esperado |
|---|---|
| `" Laura "` | Bienvenida o bienvenido, Laura |
| `""` | Bienvenida o bienvenido, visitante |
| `"Carlos"` | Bienvenida o bienvenido, Carlos |

### 08. Cálculo parametrizado de compra

Usa parámetros por defecto y valida precio, cantidad y descuento antes de calcular.

| Entrada o acción | Resultado esperado |
|---|---|
| `(100,3,0.10)` | 270 |
| `(100)` | 100 |
| `(100,0)` | null |
| `(200,2,0.15)` | 340 |

### 09. Expresión de función

Guarda una expresión de función en una constante y calcula el precio con descuento.

| Entrada o acción | Resultado esperado |
|---|---|
| `(200,25)` | 150 |
| `(100,0)` | 100 |
| `(200,110)` | null |
| `(-50,10)` | null |

### 10. Funciones flecha

Usa funciones flecha; precioConIVA reutiliza calcularIVA.

| Entrada o acción | Resultado esperado |
|---|---|
| `(100,0.19)` | IVA 19; total 119 |
| `(100,0)` | IVA 0; total 100 |
| `(0)` | 0 |

### 11. Recursividad

Suma recursivamente desde 1 hasta n con caso base 0.

| Entrada o acción | Resultado esperado |
|---|---|
| `(4)` | 10 |
| `(0)` | 0 |
| `(-1)` | null |
| `(5)` | 15 |

### 12. Ámbito de variables

Compara ámbito exterior, de función y de bloque; observa la diferencia entre let y var.

| Entrada o acción | Resultado esperado |
|---|---|
| `mostrarTema()` | contraste, oscuro, claro |
| `let fuera de bloque` | ReferenceError |
| `var fuera de bloque` | verde |

### 13. Contadores independientes

Usa closure para conservar el contador y mantener independientes dos instancias.

| Entrada o acción | Resultado esperado |
|---|---|
| `contador inicia 5` | 5, 6, 7, reinicio 5 |
| `contador inicia 0` | 0, 1 |
| `consultar primero` | sigue en 5 |

### 14. Colección de categorías

Consulta y modifica arrays; spread crea una copia independiente.

| Entrada o acción | Resultado esperado |
|---|---|
| `categorías iniciales` | 3 elementos |
| `cambiar índice 1` | Deportes |
| `agregar Moda a copia` | original 3; copia 4 |
| `array vacío` | sin último elemento |

### 15. Edición de favoritos

Practica push, pop, unshift, shift y splice y registra sus valores de retorno.

| Entrada o acción | Resultado esperado |
|---|---|
| `secuencia principal` | Inicio, Catálogo, Contacto |
| `push A,B` | A, B, C |
| `reemplazar Verde` | Rojo, Amarillo, Azul |

### 16. Resumen de existencias

Calcula unidades y posiciones agotadas con for...of y forEach sin alterar el array.

| Entrada o acción | Resultado esperado |
|---|---|
| `[3,0,7,2,0]` | 12 unidades; 2 agotados |
| `[]` | 0; 0 |
| `[0,0,0]` | 0; 3 |

### 17. Búsqueda de productos

Usa find, findIndex y some para buscar un objeto, su índice y stock agotado.

| Entrada o acción | Resultado esperado |
|---|---|
| `id 2` | Teclado; índice 1; hay agotados |
| `id 1` | Mouse; índice 0 |
| `id 10` | no encontrado; -1 |
| `lista vacía` | no encontrado |

### 18. Orden numérico de precios

Ordena copias con sort y comparadores numéricos; el original permanece intacto.

| Entrada o acción | Resultado esperado |
|---|---|
| `[100,25,8,250,40]` | ascendente 8,25,40,100,250 |
| `[5,5,1]` | 1,5,5 |
| `[]` | [] |

### 19. Transformación y selección de ofertas

Aplica map, filter y reduce para descontar, seleccionar y sumar precios.

| Entrada o acción | Resultado esperado |
|---|---|
| `[50,120,80,200]` | descontados 45,108,72,180; seleccionados 45,72; suma 117 |
| `[]` | listas vacías; suma 0 |
| `[200,300,500]` | sin selección; suma 0 |

### 20. Disponibilidad de asientos

Usa ciclos anidados para contar asientos libres y reservar posiciones de una matriz.

| Entrada o acción | Resultado esperado |
|---|---|
| `sala inicial` | por fila 2,1,3; total 6 |
| `reservar 0,0` | true; quedan 5 |
| `repetir reserva` | false |
| `índice inválido` | false |

### 21. Eliminar categorías repetidas

Recorre categorías y usa includes; conserva la primera aparición sin Set.

| Entrada o acción | Resultado esperado |
|---|---|
| `[web,css,web,js,css]` | web, css, js |
| `[]` | [] |
| `[html,html,html]` | html |
| `[web,Web,web]` | web, Web |

### 22. Ficha de producto

Crea un objeto, consulta propiedades con punto/corchetes y valida ventas.

| Entrada o acción | Resultado esperado |
|---|---|
| `stock 5 vender 2` | true; stock 3 |
| `stock 3 vender 4` | false; stock 3 |
| `vender -1` | false; stock 3 |

### 23. Preferencias con claves dinámicas

Construye una propiedad dinámica con [clave] y evita nombres reservados.

| Entrada o acción | Resultado esperado |
|---|---|
| `Ana, oscuro, idioma, es` | objeto con idioma es |
| `Carlos, claro, notificaciones, true` | notificaciones true |
| `clave nombre` | null |
| `clave vacía` | null |

### 24. Resumen de inventario

Usa Object.keys, values y entries para resumir cantidades y productos agotados.

| Entrada o acción | Resultado esperado |
|---|---|
| `mouse 4, teclado 2, monitor 0` | 6 unidades; monitor agotado |
| `{}` | 0; listas vacías |
| `audifonos 3` | 3; sin agotados |

### 25. Lectura de perfiles incompletos

Usa encadenamiento opcional y ?? para leer propiedades que pueden faltar y conservar 0.

| Entrada o acción | Resultado esperado |
|---|---|
| `ciudad Manizales, puntos 0` | Manizales; 0 |
| `{}` | Sin ciudad; Sin puntos |
| `null` | Sin ciudad; Sin puntos |

### 26. Métodos e inmutabilidad

Usa toUpperCase y toFixed; observa que toFixed devuelve un string.

| Entrada o acción | Resultado esperado |
|---|---|
| `frontend, 25.5` | FRONTEND; "25.50" |
| `vacío, 0` | ""; "0.00" |
| `JavaScript, 100` | JAVASCRIPT; "100.00" |

### 27. Normalización de títulos y rutas

Recorta texto, cuenta caracteres y convierte grupos de espacios en guiones.

| Entrada o acción | Resultado esperado |
|---|---|
| `Curso de JavaScript con espacios` | titulo limpio; longitud 19; ruta curso-de-javascript |
| `Aprender    JavaScript` | aprender-javascript |
| `solo espacios` | null |

### 28. Lectura segura de un precio

Convierte texto con Number y valida con Number.isFinite antes de formatear.

| Entrada o acción | Resultado esperado |
|---|---|
| `"1250.5"` | 1250.5; etiqueta "1250.50" |
| `"abc"` | null |
| `"Infinity"` | null |
| `""` | null |
| `"-2"` | null |
| `"0"` | 0; "0.00" |

### 29. Identificadores BigInt

Usa BigInt para enteros grandes y realiza operaciones entre valores del mismo tipo.

| Entrada o acción | Resultado esperado |
|---|---|
| `"9007199254740993"` | 9007199254740993, 9007199254740994, 9007199254740995 |
| `"0"` | 0, 1, 2 |
| `"42"` | 42, 43, 44 |
| `BigInt + Number` | TypeError |
| `BigInt + 1n` | suma válida |

### 30. Claves únicas con Symbol

Crea claves Symbol únicas y consulta las propiedades simbólicas del objeto.

| Entrada o acción | Resultado esperado |
|---|---|
| `dos Symbol("interno")` | distintos; no sobrescriben |
| `Object.keys` | nombre y precio |
| `getOwnPropertySymbols` | dos símbolos |
| `objeto sin símbolos` | array vacío |

## Subir a GitHub

Desde una terminal abierta dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Agregar taller de JavaScript"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```

Reemplaza `URL_DE_TU_REPOSITORIO` por la dirección del repositorio que crees en GitHub.

## Notas

- La guía solicita archivos independientes; por eso se mantienen los 30 scripts en `js/`.
- `Taller_completo.js` es un archivo adicional de consulta, no reemplaza los 30 scripts.
- El ejercicio 29 requiere un navegador compatible con `BigInt`.
- El ejercicio 30 demuestra que Symbol crea claves únicas, pero no convierte sus propiedades en información privada o segura.
