---
tag: MSNDTQ3M3T
kind: problem
type: answer
answer: (0,0),(1,9)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(r, s)$ of real numbers such that the zeros of the polynomials
$$
f(x)=x^{2}-2 r x+r
$$
and
$$
g(x)=27 x^{3}-27 r x^{2}+s x-r^{6}
$$
are all real and nonnegative.
