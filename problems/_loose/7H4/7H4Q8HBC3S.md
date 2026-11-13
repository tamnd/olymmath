---
tag: 7H4Q8HBC3S
kind: problem
type: answer
answer: a_{n}=\frac{n\sqrt{2}}{2}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of real numbers $\left\{a_{n}\right\}$ satisfies the conditions: $a_{1}=\frac{\sqrt{2}}{2}+1, a_{2}=\sqrt{2}+1, a_{n+1}+a_{n-1}=\frac{n}{a_{n}-a_{n-1}}+2$ $(n \geqslant 2)$, then the general term formula $a_{n}=(n \geqslant 1)$.
