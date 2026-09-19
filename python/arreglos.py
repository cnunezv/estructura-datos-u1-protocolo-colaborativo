"""Operaciones fundamentales de arreglos en Python."""
from random import randint


def crear_aleatorio(n: int = 10) -> list[int]:
    return [randint(1, 100) for _ in range(n)]


def recorrer_for_clasico(arreglo: list[int]) -> None:
    for indice in range(len(arreglo)):
        print(f"a[{indice}] = {arreglo[indice]}")


def recorrer_for_each(arreglo: list[int]) -> None:
    for valor in arreglo:
        print(valor, end=" ")
    print()


def impares_a_cero(arreglo: list[int]) -> None:
    for indice in range(len(arreglo)):
        if arreglo[indice] % 2 != 0:
            arreglo[indice] = 0


def multiplicar_por_indice(arreglo: list[int]) -> None:
    for indice in range(len(arreglo)):
        arreglo[indice] *= indice


def busqueda_lineal(arreglo: list[int], objetivo: int) -> int:
    for indice, valor in enumerate(arreglo):
        if valor == objetivo:
            return indice
    return -1


def demostrar() -> None:
    original = crear_aleatorio()
    print("Arreglo original:", original)
    print("Recorrido con for clasico:")
    recorrer_for_clasico(original)
    print("Recorrido con for-each:")
    recorrer_for_each(original)

    sin_impares = original.copy()
    impares_a_cero(sin_impares)
    print("Impares a cero:", sin_impares)

    por_indice = original.copy()
    multiplicar_por_indice(por_indice)
    print("Multiplicado por indice:", por_indice)
    objetivo = original[3]
    print(f"Busqueda lineal de {objetivo}: indice {busqueda_lineal(original, objetivo)}")
