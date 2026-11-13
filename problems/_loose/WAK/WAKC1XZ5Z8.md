---
tag: WAKC1XZ5Z8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90462
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=459
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether there exist two distinct finite subsets $A$ and $B$ of the reals such that for every polynomial $f$ of degree 2012 with real coefficients,

$$
\sum_{x \in A} f(x)=\sum_{x \in B} f(x)
$$
