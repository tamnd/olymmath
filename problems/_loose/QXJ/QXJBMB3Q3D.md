---
tag: QXJBMB3Q3D
kind: problem
type: answer
answer: \frac{1}{e}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy: $a_{1}=1, a_{n+1}=\frac{a_{n}}{(n+1)\left(a_{n}+1\right)}\left(n \in Z^{+}\right)$, try to find the value of $\lim _{n \rightarrow+\infty} n!\cdot a_{n}$.
