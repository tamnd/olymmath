---
tag: GH9NWGQM1S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_n$ is defined by $\int_{a_n}^{a_{n+1}} (1+|\sin x|)dx=(n+1)^2\ (n=1,\ 2,\ \cdots),\ a_1=0$.

Find $\lim_{n\to\infty} \frac{a_n}{n^3}$.
