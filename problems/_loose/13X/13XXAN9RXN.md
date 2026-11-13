---
tag: 13XXAN9RXN
kind: problem
type: answer
answer: "625376"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all 3-digit integers $x$ such that the base 10 representation of $x^{2}$ ends with the base 10 representation of $x$.

For example, for 1 digit, we have $5^{2}=25,6^{2}=36$, and for 2 digits, we have $25^{2}=625$ and $76^{2}=5776$.
