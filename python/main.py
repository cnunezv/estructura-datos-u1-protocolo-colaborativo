from arreglos import demostrar as demostrar_arreglos
from matrices import demostrar as demostrar_matrices


def main() -> None:
    while True:
        print("\n=== PROTOCOLO COLABORATIVO PYTHON ===")
        print("1. Demostrar arreglos")
        print("2. Demostrar matrices")
        print("0. Salir")
        opcion = input("Seleccione una opcion: ")
        if opcion == "1":
            demostrar_arreglos()
        elif opcion == "2":
            demostrar_matrices()
        elif opcion == "0":
            break
        else:
            print("Opcion no valida")


if __name__ == "__main__":
    main()
