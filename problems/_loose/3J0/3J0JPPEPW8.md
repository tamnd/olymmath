---
tag: 3J0JPPEPW8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x, y, z$ are positive real numbers, $0 \leqslant \lambda \leqslant 2$. Prove:
$$
\frac{\sqrt{x y}}{x+y+\lambda z}+\frac{\sqrt{y z}}{y+z+\lambda x}+\frac{\sqrt{z x}}{z+x+\lambda y} \leqslant \frac{3}{2+\lambda} .
$$
