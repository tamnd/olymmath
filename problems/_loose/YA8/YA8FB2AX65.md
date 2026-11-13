---
tag: YA8FB2AX65
kind: problem
type: answer
answer: a_{999}<\frac{1}{1000}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)_{n=1}^{\infty}$ is defined by $a_{1}=\frac{1}{2}, a_{n+1}=a_{n}-a_{n}^{2}$. Is $a_{999}<\frac{1}{1000}$?
