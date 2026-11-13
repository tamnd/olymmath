---
tag: KTSXDJSEJX
kind: problem
type: answer
answer: (a, b) = (2 n^2 + 1, n) for n in natural numbers
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO Finalrunde
---
Finde alle Paare $(a, b)$ natürlicher Zahlen, sodass
$$
\frac{a^{3}+1}{2 a b^{2}+1}
$$
eine ganze Zahl ist.
