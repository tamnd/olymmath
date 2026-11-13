---
tag: 5WRFTBXSH3
kind: problem
type: answer
answer: "37"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking at four-digit PIN codes. We say that a PIN code dominates another PIN code if each digit of the first PIN code is at least as large as the corresponding digit of the second PIN code. For example, 4961 dominates 0761, because $4 \geqslant 0, 9 \geqslant 7, 6 \geqslant 6$ and $1 \geqslant 1$. We want to assign a color to every possible PIN code from 0000 to 9999, but if one PIN code dominates another, they must not have the same color.

What is the minimum number of colors with which you can do this?
