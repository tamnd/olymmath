---
tag: DGGPZ8X1QD
kind: problem
type: answer
answer: S_{n}=(\frac{n(n+1)}{2})^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's set $S_{n}=1^{3}+\cdots+n^{3}$ and $u_{n}=1+3+5+\cdots+(2 n-1)$ the sum of the first $n$ odd numbers.

1. By evaluating for small $n$, predict and then prove by induction a formula for $u_{n}$.
2. Using the formula found above for the sum of linear terms, find $u_{n}$ again.
3. Can we find a third way to derive a formula for $u_{n}$?
4. By noticing that $1^{3}=1, 2^{3}=3+5, 3^{3}=7+9+11$ etc., find a formula for $S_{n}$.
