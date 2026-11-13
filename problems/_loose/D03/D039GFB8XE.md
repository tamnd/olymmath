---
tag: D039GFB8XE
kind: problem
type: answer
answer: 2n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sea $n > 2$ un entero par. En las casillas de un tablero de $n \times n$ se deben colocar fichas de modo que en cada columna la cantidad de fichas sea par y distinta de cero, y en cada fila la cantidad de fichas sea impar.

Determinar la menor cantidad de fichas que hay que colocar en el tablero para cumplir esta regla.

Mostrar una configuración con esa cantidad de fichas y explicar porqué con menos fichas no se puede cumplir la regla.
