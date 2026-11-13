---
tag: 1HGPH2EXJK
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154021
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Let $\left\{x_{1}, x_{2}, x_{3}, \ldots, x_{n}\right\}$ be a set of $n$ distinct positive integers, such that the sum of any 3 of them is a prime number. What is the maximum value of $n$ ?
