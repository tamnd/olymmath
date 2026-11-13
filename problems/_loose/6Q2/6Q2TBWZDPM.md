---
tag: 6Q2TBWZDPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=147113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \cdots, x_{i}, \cdots$ be a sequence of positive integers, satisfying
$$
x_{7 t-6}+\cdots+x_{7 t} \leqslant 12 (t=1,2, \cdots) \text {. }
$$

Let $S_{i}=x_{1}+\cdots+x_{i}$. Prove that for any positive integer $n$, there must exist indices $j, k$, where $j<$ $k$, such that
$$
S_{k}-S_{j}=n
$$

holds.
