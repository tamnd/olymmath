---
tag: CJFJ5BEHWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd positive integer. Given are $n$ balls - black and white, placed on a circle. For a integer $1\leq k \leq n-1$, call $f(k)$ the number of balls, such that after shifting them with $k$ positions clockwise, their color doesn't change.
a) Prove that for all $n$, there is a $k$ with $f(k) \geq \frac{n-1}{2}$.
b) Prove that there are infinitely many $n$ (and corresponding colorings for them) such that $f(k)\leq \frac{n-1}{2}$ for all $k$.
