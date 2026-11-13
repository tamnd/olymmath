---
tag: JNZFSQSZE0
kind: problem
type: answer
answer: a_{n}=\frac{5^{n}+2\cdot3^{n}+1}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given: $\sum_{n=0}^{\infty} a_{n} t^{n} / n!=\left(\sum_{k=0}^{\infty} t^{2 k} /(2 k)!\right)^{2}\left(\sum_{j=0}^{\infty} t^{j} / j!\right)^{3}$, find $a_{n}$.
