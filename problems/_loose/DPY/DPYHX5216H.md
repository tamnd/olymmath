---
tag: DPYHX5216H
kind: problem
type: answer
answer: All pairs (a, b) with a ≤ b such that b = a or b = 2a.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=202
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
En cada casilla de un tablero de $a$ filas y $b$ columnas está escrito un $0$ o un $1$ de modo que se verifican las siguientes condiciones.
* Si una fila y una columna se intersecan en una casilla con $0$ entonces contienen el mismo número de ceros.
* Si una fila y una columna se intersecan en una casilla con $1$ entonces contienen el mismo número de unos.
Halle todos los pares $a, b$, con $a \le b$, para los cuales esto es posible.
