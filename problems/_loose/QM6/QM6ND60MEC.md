---
tag: QM6ND60MEC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{x_n\}_{n=0}^\infty$ is defined by the following equations:
$x_n=\sqrt{x_{n-1} x_{n-2}+\frac{n}{2}}$ ,$\forall$ $n\geq 2$, $x_0=x_1=1$.
Prove that there exist a real number $a$, such that $an<x_n<an+1$ for each natural number $n$.
