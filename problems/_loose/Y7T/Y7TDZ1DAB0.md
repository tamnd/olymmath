---
tag: Y7TDZ1DAB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90070
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be natural numbers of different parity. Prove that the number

$$
\frac{3 m^{2}+5 m n}{3 n^{2}+m n}
$$

is not a natural number.
