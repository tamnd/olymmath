---
tag: XYACF8YTEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if a random variable $X$ has the smallest and largest possible values, which are $a$ and $b$ respectively, then the variance of this random variable does not exceed the square of half the difference between these values:

$$
D(X) \leqslant[(b-a) / 2]^{2}
$$
