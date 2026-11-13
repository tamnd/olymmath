---
tag: PE1HPSZ2VM
kind: problem
type: answer
answer: "2020"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each term of the sequence $\left(a_{n}\right)_{n \in \mathbb{N}}$ of positive real numbers, starting from the second, is equal to the arithmetic mean of the geometric and arithmetic means of its two neighboring terms.

If $a_{1}=\frac{1}{505}$ and $a_{505}=505$, determine $a_{1010}$.
