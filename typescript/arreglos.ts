export function crearAleatorio(n = 10): number[] { return Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1); }
export function recorrerForClasico(a: number[]): void { for (let i = 0; i < a.length; i++) console.log(`a[${i}] = ${a[i]}`); }
export function recorrerForEach(a: number[]): void { a.forEach(valor => process.stdout.write(`${valor} `)); console.log(); }
export function imparesACero(a: number[]): void { for (let i = 0; i < a.length; i++) if (a[i] % 2 !== 0) a[i] = 0; }
export function multiplicarPorIndice(a: number[]): void { for (let i = 0; i < a.length; i++) a[i] *= i; }
export function busquedaLineal(a: number[], objetivo: number): number { for (let i = 0; i < a.length; i++) if (a[i] === objetivo) return i; return -1; }
export function demostrarArreglos(): void { const original = crearAleatorio(); console.log('Original:', original); recorrerForClasico(original); recorrerForEach(original); const sinImpares = [...original]; imparesACero(sinImpares); console.log('Impares a cero:', sinImpares); const porIndice = [...original]; multiplicarPorIndice(porIndice); console.log('Por indice:', porIndice); console.log('Busqueda:', busquedaLineal(original, original[3])); }
