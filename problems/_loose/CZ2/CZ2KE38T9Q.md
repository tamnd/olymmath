---
tag: CZ2KE38T9Q
kind: problem
type: answer
answer: \frac{57}{20}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96988
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ defined by $a_{1}=\frac{2}{3}, a_{n+1}=a_{n}^{2}+a_{n-1}^{2}+\cdots+a_{1}^{2}\left(n \in \mathbf{N}^{*}\right)$. If for any $n$ $\in \mathbf{N}^{*}, \frac{1}{a_{1}+1}+\frac{1}{a_{2}+1}+\cdots+\frac{1}{a_{n}+1}<M$ always holds, find the minimum value of $M$.
