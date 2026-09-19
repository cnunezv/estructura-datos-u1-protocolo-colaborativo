# Comparativa de lenguajes

| Criterio | Python | C# | TypeScript |
| --- | --- | --- | --- |
| Tipado | Dinámico y fuerte. | Estático y fuerte. | Estático gradual sobre JavaScript; fuerte con configuración estricta. |
| Declaración de 10 enteros | `a = [0] * 10` | `int[] a = new int[10];` | `const a: number[] = new Array(10);` |
| Tamaño | Las listas son dinámicas. | Los arreglos son fijos; `List<int>` es dinámica. | Los arreglos son dinámicos. |
| Recorrido equivalente a for-each | `for v in a:` | `foreach (int v in a)` | `for (const v of a)` o `a.forEach(...)`. |
| Índice fuera de rango | `IndexError`. | `IndexOutOfRangeException`. | Leer devuelve `undefined`; una validación evita errores posteriores. |
| Matrices | Lista de listas. | Matriz rectangular `int[,]` y arreglos irregulares `int[][]`. | Arreglo de arreglos. |
| Matrices irregulares | Sí. | Sí con `int[][]`. | Sí. |
| Memoria | Automática: recolector de basura. | Automática: recolector de basura. | Automática: recolector de basura de JavaScript. |

## Conclusiones

C# detecta muchos errores de tipo y de forma antes de ejecutar, por lo que resulta útil cuando las estructuras de datos crecen y el proyecto tiene varias personas. Python permite expresar la misma lógica con menos código y facilita prototipos rápidos, aunque exige mayor cuidado al validar los datos en ejecución. TypeScript agrega verificación estática a la flexibilidad de JavaScript y es conveniente para proyectos web. Los tres lenguajes permiten trabajar con arreglos y matrices, pero difieren en el nivel de control y validación que ofrecen.
