---
tag: QPJHNKQ666
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\times[0,1]\to\mathbb R$ be a continuous function. Find the limit
$$\lim_{n\to\infty}\left(\frac{(2n+1)!}{(n!)^2}\right)^2\int^1_0\int^1_0(xy(1-x)(1-y))^nf(x,y)\text dx\text dy.$$
