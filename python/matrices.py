"""Operaciones fundamentales de matrices en Python."""


def crear_3x3() -> list[list[int]]:
    valor = 1
    matriz: list[list[int]] = []
    for _ in range(3):
        fila = []
        for _ in range(3):
            fila.append(valor)
            valor += 1
        matriz.append(fila)
    return matriz


def imprimir_tabla(matriz: list[list[int]]) -> None:
    for fila in matriz:
        print("".join(f"{valor:4d}" for valor in fila))


def recorrer_por_columnas(matriz: list[list[int]]) -> None:
    for columna in range(len(matriz[0])):
        for fila in range(len(matriz)):
            print(f"m[{fila}][{columna}] = {matriz[fila][columna]}")


def sumar_elementos(matriz: list[list[int]]) -> int:
    return sum(valor for fila in matriz for valor in fila)


def intercambiar_primera_ultima_fila(matriz: list[list[int]]) -> None:
    matriz[0], matriz[-1] = matriz[-1], matriz[0]


def demostrar() -> None:
    matriz = crear_3x3()
    print("Matriz 3x3:")
    imprimir_tabla(matriz)
    print("Recorrido por columnas:")
    recorrer_por_columnas(matriz)
    print("Suma de elementos:", sumar_elementos(matriz))
    intercambiar_primera_ultima_fila(matriz)
    print("Matriz con primera y ultima fila intercambiadas:")
    imprimir_tabla(matriz)
    irregular = [[1, 2], [3, 4, 5], [6]]
    print("Matriz irregular:")
    imprimir_tabla(irregular)
