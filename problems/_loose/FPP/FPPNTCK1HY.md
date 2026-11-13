---
tag: FPPNTCK1HY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$ set

$$
A_{n}=\{j: 1 \leq j \leq n,(j, n)=1\}
$$

Find all $n$ such that the polynomial

$$
P_{n}(x)=\sum_{j \in A_{n}} x^{j-1}
$$

is irreducible over $\mathbb{Z}[x]$.
