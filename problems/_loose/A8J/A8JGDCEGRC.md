---
tag: A8JGDCEGRC
kind: problem
type: answer
answer: binomial(n, m) * (2^m + 2(-1)^m)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LII Olimpiada Matemática Española
---
¿De cuántas formas se pueden colorear los vértices de un polígono con $n \ge 3$ lados usando tres colores de forma que haya exactamente $m$ lados, $2 \le m \le n$, con los extremos de colores diferentes?
