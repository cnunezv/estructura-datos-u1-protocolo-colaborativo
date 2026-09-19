namespace ProtocoloColaborativo;

public static class Arreglos
{
    private static readonly Random Random = new();
    public static int[] CrearAleatorio(int n) => Enumerable.Range(0, n).Select(_ => Random.Next(1, 101)).ToArray();
    public static void RecorrerForClasico(int[] arreglo) { for (int i = 0; i < arreglo.Length; i++) Console.WriteLine($"a[{i}] = {arreglo[i]}"); }
    public static void RecorrerForEach(int[] arreglo) { foreach (int valor in arreglo) Console.Write($"{valor} "); Console.WriteLine(); }
    public static void ImparesACero(int[] arreglo) { for (int i = 0; i < arreglo.Length; i++) if (arreglo[i] % 2 != 0) arreglo[i] = 0; }
    public static void MultiplicarPorIndice(int[] arreglo) { for (int i = 0; i < arreglo.Length; i++) arreglo[i] *= i; }
    public static int BusquedaLineal(int[] arreglo, int objetivo) { for (int i = 0; i < arreglo.Length; i++) if (arreglo[i] == objetivo) return i; return -1; }
    public static void Demostrar()
    {
        int[] original = CrearAleatorio(10);
        Console.WriteLine("Arreglo original: " + string.Join(", ", original));
        RecorrerForClasico(original); RecorrerForEach(original);
        int[] sinImpares = (int[])original.Clone(); ImparesACero(sinImpares); Console.WriteLine("Impares a cero: " + string.Join(", ", sinImpares));
        int[] porIndice = (int[])original.Clone(); MultiplicarPorIndice(porIndice); Console.WriteLine("Multiplicado por indice: " + string.Join(", ", porIndice));
        Console.WriteLine($"Busqueda lineal: {BusquedaLineal(original, original[3])}");
    }
}
