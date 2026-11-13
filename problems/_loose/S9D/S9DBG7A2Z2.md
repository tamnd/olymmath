---
tag: S9DBG7A2Z2
kind: problem
type: answer
answer: 2,3,7,42;2,3,8,24;2,3,9,18;2,3,10,15;2,3,12,12;2,4,5,20;2,4,6,12;2,4,8,8;2,5,5,10;2,6,6,
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1.5 * Find all positive integer solutions $x, y, z, t$ to the equation $\frac{1}{x}+\frac{1}{y}+\frac{1}{z}+\frac{1}{t}=1$ with $x \leqslant y \leqslant z \leqslant t$.
