using ProtocoloColaborativo;

Console.WriteLine("=== PROTOCOLO COLABORATIVO C# ===");
Console.WriteLine("1. Arreglos  2. Matrices");
string? opcion = Console.ReadLine();
if (opcion == "1") Arreglos.Demostrar();
else if (opcion == "2") Matrices.Demostrar();
else Console.WriteLine("Opcion no valida");
