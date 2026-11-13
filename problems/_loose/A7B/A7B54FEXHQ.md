---
tag: A7B54FEXHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence of real numbers $\left\{a_{n}\right\}$ have the sum of the first $n$ terms $S_{n}$ satisfying
$$
S_{n+1}=a_{n+1} S_{n}\left(n \in \mathbf{Z}_{+}\right) .
$$

Prove: When $k \geqslant 3$,
$$
0 \leqslant a_{k+1} \leqslant a_{k} \leqslant \frac{4}{3} \text {. }
$$
