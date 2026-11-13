---
tag: VJHJDM3DMR
kind: problem
type: answer
answer: \frac{\sqrt{5}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given: $a, b, c$ are all positive numbers, find the maximum value of $y=\frac{a b+2 b c}{a^{2}+b^{2}+c^{2}}$.
Analysis In the process of using the arithmetic mean inequality, note that the coefficient ratio of $a b$ and $b c$ should be $1: 2$, so we use parameters to determine the method of splitting $b^{2}$.
