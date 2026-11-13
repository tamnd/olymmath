---
tag: AT44F3R5CQ
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{n+1}=\frac{a_{n}}{2}+2^{n-1} \cdot a_{n}^{2}\left(n \in \mathbf{N}^{*}\right)$. Let $S_{n}=$ $\sum_{i=1}^{n} \frac{1}{2^{n} a_{n}+1}$, find the value of $\lim _{n \rightarrow \infty} S_{n}$.
