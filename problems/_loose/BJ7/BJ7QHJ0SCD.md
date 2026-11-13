---
tag: BJ7QHJ0SCD
kind: problem
type: answer
answer: x1 = x2 = ... = x50 = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XVII Olimpiada Matemática Rioplatense
---
Encuentre todas las sucesiones $x_1, x_2, \dots, x_{50}$ de 50 enteros positivos, con máximo común divisor igual a 1, tales que, para cada par de índices distintos $i, j$, el mínimo común múltiplo de $x_i$ y $x_j$ divide a la suma de los cuadrados de los restantes 48 términos.
