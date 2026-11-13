---
tag: HH5TB9RH31
kind: problem
type: answer
answer: '[\frac{n}{2}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120760
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 24th question: Given an integer $n \geq 2$, for a permutation $\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ of $\{1,2, \ldots, n\}$ and $1 \leq i \leq n$, let $x_{i}$ denote the maximum length of an increasing subsequence starting with $a_{i}$, and let $y_{i}$ denote the maximum length of a decreasing subsequence starting with $a_{i}$. Find the minimum possible value of $\sum_{\mathrm{i}=1}^{\mathrm{n}}\left|x_{i}-y_{i}\right|$.
