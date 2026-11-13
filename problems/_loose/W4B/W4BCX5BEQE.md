---
tag: W4BCX5BEQE
kind: problem
type: answer
answer: f(x,y) = 2^{x-y}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the functions $f:\mathbb{Z}\times \mathbb{Z}\to\mathbb{R}$ such that

a) $f(x,y)\cdot f(y,z) \cdot f(z,x) = 1$ for all integers $x,y,z$;

b) $f(x+1,x)=2$ for all integers $x$.
