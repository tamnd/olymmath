---
tag: RHQ6HS6E75
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For non-negative numbers $a, b, c, d$, the following equalities are satisfied:

$\sqrt{a+b}+\sqrt{c+d}=\sqrt{a+c}+\sqrt{b+d}=\sqrt{a+d}+\sqrt{b+c}$. What is the maximum number of distinct values that can be among the numbers $a, b, c, d$?
