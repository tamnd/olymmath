---
tag: TTK48AAFZA
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{n}=\frac{2^{n}}{2^{2^{n}}+1}\left(n \in \mathbf{N}_{+}\right)$, let $A_{n}=\sum_{i=1}^{n} a_{i}, B_{n}=\prod_{i=1}^{n} a_{i}$. Prove: $3 A_{n}+B_{n} \cdot 2^{\frac{(1+n)(2-n)}{2}}$ is a constant.
