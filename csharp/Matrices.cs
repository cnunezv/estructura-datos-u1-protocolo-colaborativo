namespace ProtocoloColaborativo;

public static class Matrices
{
    public static int[,] Crear3x3() { int[,] m = new int[3, 3]; int valor = 1; for (int i = 0; i < 3; i++) for (int j = 0; j < 3; j++) m[i, j] = valor++; return m; }
    public static void ImprimirTabla(int[,] m) { for (int i = 0; i < m.GetLength(0); i++) { for (int j = 0; j < m.GetLength(1); j++) Console.Write($"{m[i, j],4}"); Console.WriteLine(); } }
    public static void RecorrerPorColumnas(int[,] m) { for (int j = 0; j < m.GetLength(1); j++) for (int i = 0; i < m.GetLength(0); i++) Console.WriteLine($"m[{i}][{j}] = {m[i, j]}"); }
    public static int SumarElementos(int[,] m) { int suma = 0; foreach (int valor in m) suma += valor; return suma; }
    public static void IntercambiarPrimeraUltimaFila(int[,] m) { for (int j = 0; j < m.GetLength(1); j++) (m[0, j], m[m.GetLength(0) - 1, j]) = (m[m.GetLength(0) - 1, j], m[0, j]); }
    public static void Demostrar() { int[,] m = Crear3x3(); ImprimirTabla(m); RecorrerPorColumnas(m); Console.WriteLine("Suma: " + SumarElementos(m)); IntercambiarPrimeraUltimaFila(m); ImprimirTabla(m); int[][] irregular = [[1, 2], [3, 4, 5], [6]]; foreach (int[] fila in irregular) Console.WriteLine(string.Join(" ", fila)); }
}
