---
tag: HF6HM6KX9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91381
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=339
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
Let $n$ be a natural number and $p, q$ prime numbers, so that the following statements hold:

$$
\begin{gathered}
p q \mid n^{p}+2 \\
n+2 \mid n^{p}+q^{p}
\end{gathered}
$$

Show that there is a natural number $m$ such that $q \mid 4^{m} n+2$ holds.
