---
tag: 2ERJVVP87P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $(x_n)$ is given by
$x_1=\frac{1}{2},$ $x_n=\frac{2n-3}{2n} \cdot x_{n-1}$ for $n=2,3,... .$
Prove that for all natural numbers $n \geq 1$ the following inequality holds
$x_1+x_2+...+x_n < 1$.
