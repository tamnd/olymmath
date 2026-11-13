---
tag: FF4NDKP2KK
kind: problem
type: answer
answer: \frac{5^{2}+7^{2}+\ldots+(2n+3)^{2}}{n}\geqslant(n+4)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We set $u_{1}=5$ and for all $n \geqslant 1$, we have the relation $u_{n+1}=u_{n}+(2 n+5)$.

1. Show that, for $n \geqslant 1: u_{n}=n^{2}+4 n$.
2. Deduce that $\frac{5^{2}+7^{2}+\ldots+(2 n+3)^{2}}{n} \geqslant(n+4)^{2}$
