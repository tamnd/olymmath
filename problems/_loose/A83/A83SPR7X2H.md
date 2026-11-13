---
tag: A83SPR7X2H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(m, n)$ satisfy
$$
f(m, n) \leqslant f(m, n-1)+f(m-1, n),
$$

where $m, n$ are positive integers, $m, n \geqslant 2$ and
$$
f(1, n)=f(m, 1)=1 .
$$

Prove: $f(m, n) \leqslant C_{m+n}$.
