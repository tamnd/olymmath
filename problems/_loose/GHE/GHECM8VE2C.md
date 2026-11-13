---
tag: GHECM8VE2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232436
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p, q$ be coprime integers, such that $|\frac{p} {q}| \leq 1$. For which $p, q$, there exist even integers $b_1, b_2, \ldots, b_n$, such that $$\frac{p} {q}=\frac{1}{b_1+\frac{1}{b_2+\frac{1}{b_3+\ldots}}}? $$
