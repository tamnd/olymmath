---
tag: QK4B9CMQN2
kind: problem
type: answer
answer: '{n\in{N}\midn\geqslant3,n\neq4}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ $(n \geqslant 3)$ such that there exists a set $M$ with $n$ elements, where the elements are distinct non-zero vectors of equal length, and the following conditions are satisfied: $\sum_{u \in M} u=0$, and for any $v, w \in M$, $\boldsymbol{v}+\boldsymbol{w} \neq \mathbf{0}$.
