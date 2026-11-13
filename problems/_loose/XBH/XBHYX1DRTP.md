---
tag: XBHYX1DRTP
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 20 numbers $1,2, \cdots, 20$, two people, A and B, take turns placing a "+" or "-" sign in front of these numbers (the order of placement is not limited). After 20 steps, the absolute value $S$ of the resulting algebraic sum is calculated. A wants to make $S$ as small as possible, while B wants to make $S$ as large as possible. What is the largest $S$ that B can guarantee?
