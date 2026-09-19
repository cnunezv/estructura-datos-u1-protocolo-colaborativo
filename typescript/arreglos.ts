export function crearAleatorio(n = 10): number[] { return Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1); }
export function recorrerForClasico(a: number[]): void { for (let i = 0; i < a.length; i++) console.log(`a[${i}] = ${a[i]}`); }
export function recorrerForEach(a: number[]): void { const salida: string[] = []; a.forEach(valor => salida.push(String(valor))); console.log(salida.join(' ')); }
export function imparesACero(a: number[]): void { for (let i = 0; i < a.length; i++) if (a[i] % 2 !== 0) a[i] = 0; }
export function multiplicarPorIndice(a: number[]): void { for (let i = 0; i < a.length; i++) a[i] *= i; }
export function busquedaLineal(a: number[], objetivo: number): number { for (let i = 0; i < a.length; i++) if (a[i] === objetivo) return i; return -1; }
export function demostrarArreglos(): void {
  const original = crearAleatorio();
  console.log('Arreglo original:', original.join(', '));
  console.log('Recorrido con for clasico:');
  recorrerForClasico(original);
  console.log('Recorrido con for-each:');
  recorrerForEach(original);
  const sinImpares = [...original]; imparesACero(sinImpares);
  console.log('Impares a cero:', sinImpares.join(', '));
  const porIndice = [...original]; multiplicarPorIndice(porIndice);
  console.log('Multiplicado por indice:', porIndice.join(', '));
  const objetivo = original[3];
  console.log(`Busqueda lineal de ${objetivo}: indice ${busquedaLineal(original, objetivo)}`);
}
