---
tag: D66VZ4G0NA
kind: problem
type: answer
answer: k = n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed positive integer.
- Show that there exist real polynomials $p_1, p_2, p_3, \cdots, p_k \in \mathbb{R}[x_1, \cdots, x_n]$ such that
$$(x_1 + x_2 + \cdots + x_n)^2 + p_1(x_1, \cdots, x_n)^2 + p_2(x_1, \cdots, x_n)^2 + \cdots + p_k(x_1, \cdots, x_n)^2 = n(x_1^2 + x_2^2 + \cdots + x_n^2)$$
- Find the least natural number $k$, depending on $n$, such that the above polynomials $p_1, p_2, \cdots, p_k$ exist.
