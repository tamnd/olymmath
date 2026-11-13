---
tag: R0S8PS9D2B
kind: problem
type: answer
answer: a_{n}=\frac{n}{4n-3}(n\in{N}^{*})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102760
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1$, and $a_{n+1}=\frac{\left(n^{2}+n\right) a_{n}}{3 a_{n}+n^{2}+n}\left(n \in \mathbf{N}^{*}\right)$, then its general term formula $a_{n}=$
