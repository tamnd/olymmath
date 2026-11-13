---
tag: NC3T2KCCXK
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241941
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $a>1$, let $f(a)=\frac{1}{2}\int_0^1 |ax^n-1|dx+\frac{1}{2}\ (n=1,2,\cdots)$ and let $b_n$ be the minimum value of $f(a)$ at $a>1$.

Evaluate

$$\lim_{m\to\infty} b_m\cdot b_{m+1}\cdot \cdots\cdots b_{2m}\ (m=1,2,3,\cdots)$$
