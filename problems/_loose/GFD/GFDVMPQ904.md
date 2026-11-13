---
tag: GFDVMPQ904
kind: problem
type: answer
answer: All positive integers except 1, 2, and 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ for which there exists a set $S \subset \mathbb{C}$ with $n$ elements, such that

i) each element of $S$ has modulus $1$,
ii) $\sum_{z \in S} z = 0$, and
iii) $z + w \neq 0$, for each $z, w \in S$.
