---
tag: YMJ6TAE1J3
kind: problem
type: answer
answer: 'For n=1: 1; for n=2: 2; and for n ≥ 3: 3*2^(n-2).'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $n$ eine natürliche Zahl. Bestimme die Anzahl Permutationen $\left(a_{1}, \ldots, a_{n}\right)$ der Menge $\{1,2, \ldots, n\}$ mit der folgenden Eigenschaft:
$$
2\left(a_{1}+\ldots+a_{k}\right) \text{ ist durch } k \text{ teilbar } \forall k \in\{1,2, \ldots, n\}
$$
