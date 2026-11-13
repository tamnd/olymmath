---
tag: MRPVKEP0DV
kind: problem
type: answer
answer: '5×50: impossible; 5×100: possible'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=67
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina XX OLIMPIADA MATEMÁTICA ARGENTINA
---
Se tiene un tablero rectangular de $5 \times 50$, dividido en casillas de $1 \times 1$, y fichas de dominó de $1 \times 2$, cada una con dos números escritos: un $1$ y un $-1$, uno en cada mitad. Cada ficha de dominó cubre exactamente dos casillas vecinas del tablero. Gabriel debe cubrir el tablero con estas fichas, sin huecos ni superposiciones, y de manera que en cada fila del tablero la multiplicación de los $50$ números sea positiva, y en cada columna del tablero la multiplicación de los $5$ números sea positiva.

Decidir si Gabriel podrá lograrlo. ¿Y si el tablero es de $5 \times 100$?

En caso afirmativo, indicar cómo se cubre el tablero. En caso negativo, explicar el porqué.
