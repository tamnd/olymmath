---
tag: NDR79H3VWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n\left(n \in \mathbf{Z}_{+}, n \geqslant 2\right)$ blood lamps, each lamp has only two states: on and off. For each non-empty subset $A$ of these lamps, there is a button that can operate the lamps in set $A$. When this button is operated, all lamps in set $A$ will change their states (on becomes off, off becomes on). Each button looks the same, and it is unknown which subset of lamps corresponds to which button. Assume that all lamps are initially off. Prove: All lamps can be turned on within at most $2^{n-1}+1$ operations.
(2015, Indian National Team Selection Exam)
