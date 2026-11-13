---
tag: 8SPRAR3X5S
kind: problem
type: answer
answer: \angle ABC \leq 60^\circ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an acute triangle $ABC$. The longest line of altitude is the one from vertex $A$ perpendicular to $BC$, and it's length is equal to the length of the median of vertex $B$. Prove that $\angle ABC \le 60^o$
