import { demostrarArreglos } from './arreglos';
import { demostrarMatrices } from './matrices';

const opcion = process.argv[2] ?? '1';
console.log('=== PROTOCOLO COLABORATIVO TYPESCRIPT ===');
if (opcion === '1') demostrarArreglos();
else if (opcion === '2') demostrarMatrices();
else console.log('Use npm run start -- 1 para arreglos o npm run start -- 2 para matrices.');
