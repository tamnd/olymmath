---
tag: K2VT8MJ75C
kind: problem
type: answer
answer: All odd n that are powers of 3, i.e., n = 3^t with t ≥ 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sea $n > 1$ un entero impar. Sean $P_0$ y $P_1$ dos vértices consecutivos de un polígono regular de $n$ lados. Para cada $k \ge 2$, se define $P_{k}$ como el vértice del polígono dado que se encuentra en la mediatriz de $P_{k-1}$ y $P_{k-2}$. Determine para qué valores de $n$ la sucesión $P_0, P_1, P_2, \dots$ recorre todos los vértices del polígono.
