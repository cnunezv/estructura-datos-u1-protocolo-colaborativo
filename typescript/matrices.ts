export function crear3x3(): number[][] { let valor = 1; return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => valor++)); }
export function imprimirTabla(m: number[][]): void { m.forEach(fila => console.log(fila.map(v => String(v).padStart(4)).join(''))); }
export function recorrerPorColumnas(m: number[][]): void { for (let j = 0; j < m[0].length; j++) for (let i = 0; i < m.length; i++) console.log(`m[${i}][${j}] = ${m[i][j]}`); }
export function sumarElementos(m: number[][]): number { return m.flat().reduce((suma, valor) => suma + valor, 0); }
export function intercambiarPrimeraUltimaFila(m: number[][]): void { [m[0], m[m.length - 1]] = [m[m.length - 1], m[0]]; }
export function demostrarMatrices(): void { const m = crear3x3(); imprimirTabla(m); recorrerPorColumnas(m); console.log('Suma:', sumarElementos(m)); intercambiarPrimeraUltimaFila(m); imprimirTabla(m); console.log('Matriz irregular:'); imprimirTabla([[1, 2], [3, 4, 5], [6]]); }
