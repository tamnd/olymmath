---
tag: B2B5XCX2XE
kind: problem
type: answer
answer: 1, 2, 3, 4, 6, 9, 12, 18
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain
---
Determinar todos los números naturales $n$ para los que existe algún número natural $m$ con las siguientes propiedades
- $m$ tiene al menos dos cifras (en base 10), todas son distintas y ninguna es 0.
- $m$ es múltiplo de $n$ y cualquier reordenación de sus cifras da lugar a un múltiplo de $n$.
