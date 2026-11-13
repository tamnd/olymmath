---
tag: V0WPF462VK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{x_{n}\right\}$ and $\left\{y_{n}\right\}$ be two sequences defined as follows: $x_{0}=1, x_{1}=1, x_{n+1}=$ $x_{n}+2 x_{n-1}, y_{0}=1, y_{1}=7, y_{n+1}=2 y_{n}+3 y_{n-1}(n=1,2,3, \cdots)$, then the first $n$ terms of these two sequences are $x_{n}: 1,1,3,5,11,21, \cdots, y_{n}, 1,7,17,55,161,487, \cdots$. Prove: except for the term "1", there does not exist any term that appears in both sequences.
