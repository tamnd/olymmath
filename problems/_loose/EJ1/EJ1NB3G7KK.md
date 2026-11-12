---
tag: EJ1NB3G7KK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 1000 linear functions: $f_{k}(x)=p_{k} x+q_{k}(k=1,2, \ldots, 1000)$. We need to find the value of their composition $f(x)=$ $f_{1}\left(f_{2}\left(f_{3}\left(\ldots f_{1000}(x) \ldots\right)\right)\right)$ at the point $x_{0}$. Prove that this can be done in no more than 30 stages, if on each stage any number of arithmetic operations can be performed in parallel on pairs of numbers obtained from previous stages, and on the first stage the numbers $p_{1}, p_{2}, \ldots, p_{1000}, q_{1}, q_{2}, \ldots, q_{1000}, x_{0}$ are used.
