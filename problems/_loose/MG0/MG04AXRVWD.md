---
tag: MG04AXRVWD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $${{ \ I_n=\int_1^{1+\frac{1}{n}}\{[(x+1)\ln x+1]}e^{x(e^{x}\ln x+1)}}+n\}dx \ (n=1,2,\cdots). $$

Evaluate ${\lim_{n\to\infty}I_n^{n}}.$
