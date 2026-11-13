---
tag: FY4PB1BMF7
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $a, b, c, d$ satisfying $a b c d > 1$. Find the minimum value of $\frac{a^{2}+a b^{2}+a b c^{2}+a b c d^{2}}{a b c d-1}$.
