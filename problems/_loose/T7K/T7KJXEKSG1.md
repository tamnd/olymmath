---
tag: T7KJXEKSG1
kind: problem
type: answer
answer: k = 41; number of such subsets = 495
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero
    source: hf-mathnet
    label: Argentina XVIII Olimpiada Iberoamericana de Matemática
---
Sea $M = \{1,2,...,49\}$ el conjunto de los primeros 49 enteros positivos. Determine el máximo entero $k$ tal que el conjunto $M$ tiene un subconjunto de $k$ elementos en el que no hay 6 números consecutivos. Para ese valor máximo de $k$, halle la cantidad de subconjuntos de $M$, de $k$ elementos, que tienen la propiedad mencionada.
