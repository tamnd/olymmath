---
tag: J6Y68QAVE0
kind: problem
type: answer
answer: 4k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina Nacional OMA
---
Sea $k > 1$ un entero. Determinar el menor entero positivo $n$ tal que algunas casillas de un tablero de $n \times n$ se pueden pintar de negro de modo que en cada fila y en cada columna haya exactamente $k$ casillas negras, y además, las casillas negras no compartan ni un lado ni un vértice con otra casilla negra.

**ACLARACIÓN:** Hay que responder $n$ en función de $k$.
