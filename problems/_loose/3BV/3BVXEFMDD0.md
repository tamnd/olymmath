---
tag: 3BVXEFMDD0
kind: problem
type: answer
answer: '[\frac{n}{2}]+1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$5 \cdot 151 n$ is a positive integer, find the number of integer coefficient polynomials $f(x)$, such that its coefficients belong to the set $\{0,1,2,3\}$, and satisfy $f(2)=n$.
