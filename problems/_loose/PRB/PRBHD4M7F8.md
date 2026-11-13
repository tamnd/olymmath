---
tag: PRBHD4M7F8
kind: problem
type: answer
answer: For n = 5, the maximum is 3. For n ≥ 6, the maximum is ⌊2n/3⌋ + 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $n \geq 5$ eine ganze Zahl. Bestimme die grösste ganze Zahl $k$, sodass ein Polygon mit $n$ Ecken und genau $k$ inneren $90^{\circ}$-Winkeln existiert? (Das Polygon muss nicht konvex sein, der Rand darf sich aber nicht selbst überschneiden.)
