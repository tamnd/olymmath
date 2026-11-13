---
tag: G0M1RDHCTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\sum_{i=0}^{1009} \frac{1}{x-2 i}$,
$$
g(x)=\sum_{i=0}^{1008} \frac{1}{x-2 i-1} \text {. }
$$

Prove: For all $x$ satisfying $0 < x < 2019$,
$$
f(x) > g(x) \text {. }
$$
